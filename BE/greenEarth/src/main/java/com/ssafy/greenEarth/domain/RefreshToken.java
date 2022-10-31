package com.ssafy.greenEarth.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "refresh_token")
public class RefreshToken {

    @EmbeddedId
    private RefreshTokenId id;

    @Column(nullable = false)
    private String token;

    public RefreshToken(String token, int subjectId, Role subjectRole) {
        this.id = new RefreshTokenId(subjectId, subjectRole);
        this.token = token;
    }

}
