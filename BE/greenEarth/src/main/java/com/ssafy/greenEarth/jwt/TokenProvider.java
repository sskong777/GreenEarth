package com.ssafy.greenEarth.jwt;

import com.ssafy.greenEarth.domain.Role;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import org.springframework.beans.factory.annotation.Value;

import java.util.Base64;
import java.util.Date;
import java.util.Map;

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
        // Claim : JWT payload 에 저장되는 속성 정보 단위 (java 에서는 Json map 형식의 인터페이스)
        Claims claims = Jwts.claims();
        String roleStr = role.toString().replace("ROLE_", "").toLowerCase();
        claims.put(roleStr.substring(0, 1).toUpperCase() + roleStr.substring(1) + "Id", subject);
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

    // claim 정보 추출
    public Map<String, Object> getClaims(String jwtToken) {
        return Jwts.parser().setSigningKey(SECRET_KEY.getBytes()).parseClaimsJws(jwtToken).getBody();
    }

    // 토큰

    // 토큰 유효성 체크

}
