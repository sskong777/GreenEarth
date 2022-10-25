package com.ssafy.greenEarth.domain;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class GreenEarthLogId implements Serializable {

    private int childId;

    private int greenEarthId;
}
