package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Role;
import com.ssafy.greenEarth.dto.Auth.LoginDto;
import com.ssafy.greenEarth.jwt.TokenProvider;
import com.ssafy.greenEarth.repository.ChildRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.security.auth.login.LoginException;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor()
public class AuthService {

    private final TokenProvider tokenProvider;

    private final ChildRepository childRepository;

    public Child childLogin(LoginDto loginDto) {
        // email id 비교
        Child child = childRepository.findByEmail(loginDto.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("계정을 찾을 수 없습니다."));
        // password 비교
        if (child.getPassword().equals(loginDto.getPassword())) {
            return child;
        } else {
            log.error("로그인 실패 : 비밀번호가 일치하지 않습니다.");
            return null;
        }
    }

    @Transactional
    public String createAccessToken(int id, Role role) {
        Child child = childRepository.findChildById(id)
                .orElseThrow(() -> new IllegalArgumentException("계정을 찾을 수 없습니다."));
        return tokenProvider.createAccessToken(id, role);
    }

    @Transactional
    public String createRefreshToken(int id, Role role) {
        Child child = childRepository.findChildById(id)
                .orElseThrow(() -> new IllegalArgumentException("계정을 찾을 수 없습니다."));
        String refreshToken =  tokenProvider.createAccessToken(id, role);
        child.setRefreshToken(refreshToken);
        return refreshToken;
    }
}
