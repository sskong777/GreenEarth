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
    private int id;

    @Column(nullable = false)
    private String token;

    @Column(nullable = false)
    private int subjectId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role subjectRole;

    public void setToken(String token) {
        this.token = token;
    }

    public RefreshToken(String token, int subjectId, Role subjectRole) {
        this.token = token;
        this.subjectId = subjectId;
        this.subjectRole = subjectRole;
    }

}
