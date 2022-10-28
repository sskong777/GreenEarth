package com.ssafy.greenEarth.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "refresh_token")
public class RefreshToken extends BaseTimeEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "refreshTokenId")
    private String id;

    @Column(nullable = false)
    private String refreshToken;

}
