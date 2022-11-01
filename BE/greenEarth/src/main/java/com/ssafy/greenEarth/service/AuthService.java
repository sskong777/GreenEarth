package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.*;
import com.ssafy.greenEarth.dto.Auth.*;
import com.ssafy.greenEarth.jwt.TokenProvider;
import com.ssafy.greenEarth.repository.ChildRepository;
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

    private final RefreshTokenRepository refreshTokenRepository;

    public String createAccessToken(int id, Role role) {
        Child child = childRepository.findChildById(id)
                .orElseThrow(() -> new BusinessException(NOT_EXIST_ACCOUNT));
        return tokenProvider.createAccessToken(id, role);
    }

    public String createRefreshToken(int id, Role role) {
        // 로그인 상태인지 체크
        if (refreshTokenRepository.existsById(new RefreshTokenId(id, role))) {
            log.error("현재 로그인 상태");
            throw new RuntimeException();
        }
        Child child = childRepository.findChildById(id)
                .orElseThrow(() -> new BusinessException(NOT_EXIST_ACCOUNT));
        // refresh token 생성
        String token =  tokenProvider.createRefreshToken();
        // refresh token 저장
        RefreshToken refreshToken = refreshTokenRepository.save(new RefreshToken(token, id, role));
        return refreshToken.getToken();
    }

    public TokenResDto childLogin(LoginDto loginDto) {
        // email id 비교
        Child child = childRepository.findByEmail(loginDto.getEmail())
                .orElseThrow(() -> new BusinessException(INVALID_ACCOUNT));
        // password 비교
        if (!passwordEncoder.matches(loginDto.getPassword(), child.getPassword())) {
            throw new BusinessException(INVALID_ACCOUNT);
        }
        Map<String, String> resMap = new HashMap<>();
        resMap.put("accessToken", createAccessToken(child.getId(), Role.ROLE_CHILD));
        resMap.put("refreshToken", createRefreshToken(child.getId(), Role.ROLE_CHILD));
        return new TokenResDto(resMap);
    }

    public void logout(int id, Role role) {
        refreshTokenRepository.deleteById(new RefreshTokenId(id, role));
    }

    public TokenResDto tokenIssue(TokenIssueDto tokenIssueDto, int id, Role role) {
        // 비교할 refresh token 추출
        String requestRefreshToken = tokenIssueDto.getRefreshToken();
        RefreshToken storedRefreshToken = refreshTokenRepository.findById(new RefreshTokenId(id, role))
                .orElseThrow(() -> new IllegalArgumentException("refresh token 을 찾을 수 없습니다."));

        Map<String, String> resMap = new HashMap<>();

        // refresh token 비교 후 재발급
        if (!requestRefreshToken.equals(storedRefreshToken.getToken())) {
            throw new RuntimeException();
        }
        resMap.put("accessToken", createAccessToken(id, role));     // 재발급된 access token
        resMap.put("refreshToken", storedRefreshToken.getToken());  // 기존 refresh token

        return new TokenResDto(resMap);
    }
}
