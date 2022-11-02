package com.ssafy.greenEarth.dto.Reward;

import com.ssafy.greenEarth.domain.Reward;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
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
    private int child_id;

    public RewardResDto(Reward reward){
        this.id = reward.getId();
        this.rewardName = reward.getName();
        this.rewardCondition = reward.getRewardCondition();
        this.parentNickname = reward.getParentNickname();
        this.child_id = reward.getChild().getId();
    }
}
