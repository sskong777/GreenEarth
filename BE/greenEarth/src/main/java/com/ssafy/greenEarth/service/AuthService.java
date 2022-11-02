package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.*;
import com.ssafy.greenEarth.dto.Auth.*;
import com.ssafy.greenEarth.dto.Auth.TokenDto;
import com.ssafy.greenEarth.jwt.TokenProvider;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.ParentRepository;
import com.ssafy.greenEarth.repository.RefreshTokenRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.HashMap;
import java.util.Map;

import com.ssafy.greenEarth.exception.BusinessException;
import static com.ssafy.greenEarth.exception.ErrorCode.*;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor()
public class AuthService {

    private final PasswordEncoder passwordEncoder;

    private final TokenProvider tokenProvider;

    private final ChildRepository childRepository;

    private final ParentRepository parentRepository;

    private final RefreshTokenRepository refreshTokenRepository;

    public Boolean isCurAccountExist(int id, Role role) {
        if (role == Role.ROLE_CHILD && childRepository.existsById(id)) {
            return true;
        } else if (role == Role.ROLE_PARENT && parentRepository.existsById(id)) {
            return true;
        }
        return false;
    }

    public String createAccessToken(int id, Role role) {
        if (!isCurAccountExist(id, role)) {
            throw new BusinessException(NOT_EXIST_ACCOUNT);
        }
        return tokenProvider.createAccessToken(id, role);
    }

    public String createRefreshToken(int id, Role role) {
        // 로그인 상태인지 체크
        if (refreshTokenRepository.existsById(new RefreshTokenId(id, role))) {
            throw new BusinessException(ALREADY_LOGGED_IN);
        }
        if (!isCurAccountExist(id, role)) {
            throw new BusinessException(NOT_EXIST_ACCOUNT);
        }
        // refresh token 생성 및 저장
        String token = tokenProvider.createRefreshToken();
        RefreshToken refreshToken = refreshTokenRepository.save(new RefreshToken(token, id, role));
        return refreshToken.getToken();
    }

    public TokenDto childLogin(LoginDto loginDto) {
        // email id 비교
        Child child = childRepository.findByNickname(loginDto.getEmail())
                .orElseThrow(() -> new BusinessException(INVALID_ACCOUNT));
        // password 비교
        if (!passwordEncoder.matches(loginDto.getPassword(), child.getPassword())) {
            throw new BusinessException(INVALID_ACCOUNT);
        }
        Map<String, String> resMap = new HashMap<>();
        resMap.put("accessToken", createAccessToken(child.getId(), Role.ROLE_CHILD));
        resMap.put("refreshToken", createRefreshToken(child.getId(), Role.ROLE_CHILD));
        return new TokenDto(resMap);
    }

    public void logout(int id, Role role) {
        refreshTokenRepository.deleteById(new RefreshTokenId(id, role));
    }

    public TokenDto tokenReissue(TokenDto tokenIssueDto) {
        String reqAccessToken = tokenIssueDto.getAccessToken();
        String reqRefreshToken = tokenIssueDto.getRefreshToken();
        // access token 유효성 검증
        if (tokenProvider.isTokenValid(reqAccessToken).equals("invalid")) {
            throw new BusinessException(INVALID_TOKEN);
        }
        // access token 에서 사용자 정보 추출
        int id = tokenProvider.getCurrentUserId(reqAccessToken);
        Role role = tokenProvider.getCurrentUserRole(reqRefreshToken);

        // 비교할 refresh token 추출
        RefreshToken storedRefreshToken = refreshTokenRepository.findById(new RefreshTokenId(id, role))
                .orElseThrow(() -> new BusinessException(NOT_EXIST_REFRESH_TOKEN));

        Map<String, String> resMap = new HashMap<>();

        // refresh token 비교 후 재발급
        if (!reqRefreshToken.equals(storedRefreshToken.getToken())) {
            throw new RuntimeException();
        }
        resMap.put("accessToken", createAccessToken(id, role));     // 재발급된 access token
        resMap.put("refreshToken", storedRefreshToken.getToken());  // 기존 refresh token

        return new TokenDto(resMap);
    }
}
