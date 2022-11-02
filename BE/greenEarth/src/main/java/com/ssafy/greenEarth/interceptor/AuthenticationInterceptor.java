package com.ssafy.greenEarth.interceptor;

import com.ssafy.greenEarth.jwt.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.naming.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ssafy.greenEarth.exception.BusinessException;
import static com.ssafy.greenEarth.exception.ErrorCode.*;

@Slf4j
@RequiredArgsConstructor
public class AuthenticationInterceptor implements HandlerInterceptor {

    private final TokenProvider tokenProvider;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        log.info("login interceptor catch!");

        String authHeader = request.getHeader(JwtProperties.HEADER_STRING);

        // Bearer 체크
        if (authHeader == null || !authHeader.startsWith(JwtProperties.TOKEN_PREFIX)) {
            throw new BusinessException(INVALID_TOKEN);
        }

        // Bearer 제외한 토큰값 추출
        String accessToken = authHeader.replace(JwtProperties.TOKEN_PREFIX, "");

        if (!StringUtils.hasText(accessToken)) {
            throw new BusinessException(EMPTY_TOKEN);
        }

        // 토큰 유효성 및 만료기간 검증
        String msg = tokenProvider.isTokenValid(accessToken);
        log.info("access token is {}", msg);

        if (msg.equals("invalid")) {
            throw new BusinessException(INVALID_TOKEN);
        } else if (msg.equals("expired")) {
            throw new BusinessException(EXPIRED_TOKEN);
        }

        // 토큰에서 사용자 id 와 role 추출하여 request body에 전달
        request.setAttribute("curUserId", tokenProvider.getCurrentUserId(accessToken));
        request.setAttribute("curUserRole", tokenProvider.getCurrentUserRole(accessToken));

        return true;
    }
}
