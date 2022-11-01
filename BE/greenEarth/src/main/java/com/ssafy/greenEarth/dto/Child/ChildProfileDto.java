package com.ssafy.greenEarth.dto.Child;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Gender;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ChildProfileDto {

    private int childId;

    private String id;

    private String realName;

    private String nickname;

    private Gender gender;

    private int mileage;

    private int clearedMission;

    private int earthLevel;

    private LocalDate birthday;

    private int avatar;

    private String parent;

    public ChildProfileDto(Child child) {
        this.childId = child.getId();
        this.id = child.getEmail().replace("@greenearth.com", "");
        this.realName = child.getRealName();
        this.nickname = child.getNickname();
        this.gender = child.getGender();
        this.mileage = child.getMileage();
        this.clearedMission = child.getClearedMission();
        this.earthLevel = child.getEarthLevel();
        this.birthday = child.getBirthday();
        this.avatar = child.getAvatar();
        this.parent = child.getParent().getNickname();
    }
}
