package com.ssafy.greenEarth.interceptor;

import com.ssafy.greenEarth.jwt.JwtProperties;
import com.ssafy.greenEarth.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.naming.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@RequiredArgsConstructor
public class LoginInterceptor implements HandlerInterceptor {

    private final TokenProvider tokenProvider;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        String authHeader = request.getHeader(JwtProperties.HEADER_STRING);

        // Bearer 체크
        if (authHeader == null || !authHeader.startsWith(JwtProperties.TOKEN_PREFIX)) {
            log.debug("access token = {}","null");
            throw new AuthenticationException("Access Token is null");
        }

        // Bearer 제외한 토큰값 추출
        String accessToken = authHeader.replace(JwtProperties.TOKEN_PREFIX, "");

        // 토큰 검증
//        if (StringUtils.hasText(accessToken) && tokenProvider.isTokenExpired(accessToken))
        return true;
    }
}
