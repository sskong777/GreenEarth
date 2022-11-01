package com.ssafy.greenEarth.jwt;

import com.ssafy.greenEarth.domain.Role;
import io.jsonwebtoken.*;
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

    public TokenProvider(@Value("${jwt.secretKey}") String secretKey) {
        this.SECRET_KEY = Base64.getEncoder().encodeToString(secretKey.getBytes());  // 비밀키 Base64로 인코딩하여 설정
        this.accessTokenValidityInMilliseconds = JwtProperties.accessTokenValidityInSeconds * 1000;
        this.refreshTokenValidityInMilliseconds = JwtProperties.refreshTokenValidityInSeconds * 1000;
    }

    // 토큰 생성 메소드
    public String createAccessToken(int currentUserId, Role currentUserRole) {
        Claims claims = Jwts.claims();
        claims.put("Id", currentUserId);
        claims.put("Role", currentUserRole);

        Date now = new Date();
        Date accessTokenExpiresIn = new Date(now.getTime() + this.accessTokenValidityInMilliseconds);   // access token 만료 시간 설정

        // Access Token 생성
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)                               // 발급 시간 (iat)
                .setSubject("accessToken")                      // 토큰 제목 (sub)
                .setExpiration(accessTokenExpiresIn)            // 만료 시간 (exp)
                .signWith(SignatureAlgorithm.HS256, this.SECRET_KEY)  // 암호화 알고리즘, 시크릿키
                .compact();
    }

    public String createRefreshToken() {
        Date now = new Date();
        Date refreshTokenExpiresIn = new Date(now.getTime() + this.refreshTokenValidityInMilliseconds);   // refresh token 만료 시간 설정

        // Refresh Token 생성
        return Jwts.builder()
                .setSubject("refreshToken")
                .setExpiration(refreshTokenExpiresIn)
                .signWith(SignatureAlgorithm.HS256, this.SECRET_KEY)
                .compact();
    }

    // claim 정보 (payload data) 추출
    public Claims getClaims(String jwtToken) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(jwtToken).getBody();
    }

    // 현재 사용자 id(pk) 추출
    public int getCurrentUserId(String jwtToken) {
        return getClaims(jwtToken).get("Id", Integer.class);
    }

    // 현재 사용자 role 추출
    public Role getCurrentUserRole(String jwtToken) {
        return Role.valueOf(getClaims(jwtToken).get("Role", String.class));
    }

    // 토큰 유효성 검층
    public String isTokenValid(String jwtToken) {
        try {
            Claims claims = getClaims(jwtToken);
            return "valid";     // 유효한 토큰
        } catch (ExpiredJwtException e) {
            return " ";   // 만료된 토큰
        } catch (Exception e) {
            return "invalid";   // 유효하지 않은 토큰
        }
    }
}
