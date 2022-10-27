package com.ssafy.greenEarth.jwt;

public interface JwtProperties {
    long accessTokenValidityInSeconds = 60 * 60 * 2;    // 초 * 분 * 시 = 2시간
    long refreshTokenValidityInSeconds = 60 * 60 * 24 * 7;  // 초 * 분 * 시 * 일 = 7일
}
