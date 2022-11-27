package com.ssafy.greenEarth.dto.Reward;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Reward;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
public class RewardReqDto {

    @NotBlank(message = "보상 이름을 입력해주세요")
    @Schema(description = "보상 이름")
    private String name;

    @NotNull(message = "보상 획득에 필요한 미션 개수를 입력해주세요")
    @Schema(description = "보상 획득에 필요한 미션 개수")
    private int rewardCondition;

    @NotBlank(message = "보호자 닉네임을 입력해주세요")
    @Schema(description = "보상 지정하는 보호자 이름")
    private String parentNickname;

    @NotNull(message = "child_id를 입력해주세요")
    @Schema(description = "아이 PK")
    private int childId;

    public Reward toEntity(Child child) {
        return Reward.builder()
                .name(getName())
                .rewardCondition(getRewardCondition())
                .parentNickname(getParentNickname())
                .isPaid(false)
                .child(child)
                .build();

    }

}
