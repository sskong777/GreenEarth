package com.ssafy.greenEarth.domain;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class GreenEarthLogId implements Serializable {

    private int childId;

    private int greenEarthId;

    public GreenEarthLogId(int childId, int greenEarthId) {
        this.childId = childId;
        this.greenEarthId = greenEarthId;
    }
}
