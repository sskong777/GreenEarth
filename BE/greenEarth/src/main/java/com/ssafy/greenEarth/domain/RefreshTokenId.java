package com.ssafy.greenEarth.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.io.Serializable;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Embeddable
public class RefreshTokenId implements Serializable {

    @Column(nullable = false)
    private int subjectId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role subjectRole;

    public RefreshTokenId(int subjectId, Role subjectRole) {
        this.subjectId = subjectId;
        this.subjectRole = subjectRole;
    }
}
