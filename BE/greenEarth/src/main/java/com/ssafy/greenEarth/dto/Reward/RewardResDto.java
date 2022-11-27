package com.ssafy.greenEarth.dto.Reward;

import com.ssafy.greenEarth.domain.Reward;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
public class RewardResDto {

    @Schema(description = "보상 PK")
    private int id;

    @Schema(description = "보상 이름")
    private String rewardName;

    @Schema(description = "보상 획득에 필요한 미션 개수")
    private int rewardCondition;

    @Schema(description = "보상 지정하는 보호자 이름")
    private String parentNickname;

    @Schema(description = "아이 PK")
    private int childId;

    @Schema(description = "보상 지급 완료 여부")
    private boolean isPaid;

    public RewardResDto(Reward reward){
        this.id = reward.getId();
        this.rewardName = reward.getName();
        this.rewardCondition = reward.getRewardCondition();
        this.parentNickname = reward.getParentNickname();
        this.childId = reward.getChild().getId();
        this.isPaid = reward.getIsPaid();
    }
}
