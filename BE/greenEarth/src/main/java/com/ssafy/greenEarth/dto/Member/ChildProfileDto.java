package com.ssafy.greenEarth.dto.Member;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Gender;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
public class ChildProfileDto {

    @NotNull(message = "child_id를 입력해주세요")
    @Schema(description = "아이 PK")
    private int childId;

    @NotBlank(message = "이름을 입력해주세요")
    @Schema(description = "아이 실명")
    private String realName;

    @NotBlank(message = "닉네임을 입력해주세요")
    @Schema(description = "아이 닉네임(로그인 ID)")
    private String nickname;

    @NotNull(message = "성별을 입력해주세요")
    @Schema(description = "아이 성별")
    private Gender gender;

    @NotNull(message = "마일리지를 입력해주세요")
    @Schema(description = "아이 마일리지")
    private int mileage;

    @NotNull(message = "클리어한 미션 개수를 입력해주세요")
    @Schema(description = "아이가 클리어한 미션 개수")
    private int clearedMission;

    @NotNull(message = "지구 레벨을 입력해주세요")
    @Schema(description = "아이의 지구 레벨")
    private int earthLevel;

    @NotNull(message = "생일을 입력해주세요")
    @Schema(description = "아이의 생일")
    private LocalDate birthday;

    @NotNull(message = "아바타 번호를 입력해주세요")
    @Schema(description = "아이의 아바타 번호")
    private int avatar;

    @NotBlank(message = "보호자 닉네임을 입력해주세요")
    @Schema(description = "아이와 연결된 보호자 닉네임")
    private String parent;

    private Boolean isParent;

    public ChildProfileDto(Child child) {
        this.childId = child.getId();
        this.realName = child.getRealName();
        this.nickname = child.getNickname();
        this.gender = child.getGender();
        this.mileage = child.getMileage();
        this.clearedMission = child.getClearedMission();
        this.earthLevel = child.getEarthLevel();
        this.birthday = child.getBirthday();
        this.avatar = child.getAvatar();
        this.parent = child.getParent().getNickname();
        this.isParent = false;
    }
}
