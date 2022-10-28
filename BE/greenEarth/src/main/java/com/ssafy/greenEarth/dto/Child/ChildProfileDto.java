package com.ssafy.greenEarth.dto.Child;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Gender;
import lombok.Data;

@Data
public class ChildProfileDto {

    private int childId;

    private String email;

    private String realName;

    private String nickname;

    private Gender gender;

    private int mileage;

    private int clearedMission;

    private int earthLevel;

    private String parent;

    public ChildProfileDto(Child child) {
        this.childId = child.getId();
        this.email = child.getEmail();
        this.realName = child.getRealName();
        this.nickname = child.getNickname();
        this.gender = child.getGender();
        this.mileage = child.getMileage();
        this.clearedMission = child.getClearedMission();
        this.earthLevel = child.getEarthLevel();
        this.parent = child.getParent().getNickname();
    }
}
