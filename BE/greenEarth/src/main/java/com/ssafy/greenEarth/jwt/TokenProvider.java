package com.ssafy.greenEarth.jwt;

import com.ssafy.greenEarth.domain.Role;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import org.springframework.beans.factory.annotation.Value;

import java.util.Base64;
import java.util.Date;

@Slf4j
@Component
public class TokenProvider {

    private final String SECRET_KEY;

    private final long accessTokenValidityInMilliseconds;

    private final long refreshTokenValidityInMilliseconds;

    public TokenProvider(
            @Value("${jwt.secretKey}") String secretKey) {
        this.SECRET_KEY = Base64.getEncoder().encodeToString(secretKey.getBytes());  // 비밀키 Base64로 인코딩하여 설정
        this.accessTokenValidityInMilliseconds = JwtProperties.accessTokenValidityInSeconds * 1000;
        this.refreshTokenValidityInMilliseconds = JwtProperties.refreshTokenValidityInSeconds * 1000;
    }

    // 토큰 생성 메소드
    public String createAccessToken(int subject, Role role) {
        Claims claims = Jwts.claims();
        claims.put("Id", subject);
        claims.put("Role", role);

        Date now = new Date();
        Date accessTokenExpiresIn = new Date(now.getTime() + this.accessTokenValidityInMilliseconds);   // access token 만료 시간 설정

        // Access Token 생성
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)                               // 발급 시간 (iat)
                .setSubject("accessToken")                      // 토큰 제목 (sub)
                .setExpiration(accessTokenExpiresIn)            // 만료 시간 (exp)
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)  // 암호화 알고리즘, 시크릿키
                .compact();
    }

    public String createRefreshToken(int subject, Role role) {
        Date now = new Date();
        Date refreshTokenExpiresIn = new Date(now.getTime() + this.refreshTokenValidityInMilliseconds);   // refresh token 만료 시간 설정

        // Refresh Token 생성
        return Jwts.builder()
                .setSubject("refreshToken")
                .setExpiration(refreshTokenExpiresIn)
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    // claim 정보 (payload data) 추출
    public Claims getClaims(String jwtToken) {
        return Jwts.parser().setSigningKey(SECRET_KEY.getBytes()).parseClaimsJws(jwtToken).getBody();
    }

    // 토큰 만료여부 체크
    public boolean isTokenExpired(String jwtToken) {
        try {
            return !getClaims(jwtToken).getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }

    // 토큰 유효성 검층
//    public boolean isTokenValid(String jwtToken) {
//        try {
//            getClaims(jwtToken).getId();
//        }
//    }

}
