package com.ssafy.greenEarth.dto.Reward;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class RewardPutDto {

    @NotBlank(message = "보상 이름을 입력해주세요")
    @Schema(description = "보상 이름")
    private String rewardName;

    @NotNull(message = "보상 획득에 필요한 미션 개수를 입력해주세요")
    @Schema(description = "보상 획득에 필요한 미션 개수")
    private int rewardCondition;

    @NotNull(message = "child_id를 입력해주세요")
    @Schema(description = "아이 PK")
    private int childId;

}
