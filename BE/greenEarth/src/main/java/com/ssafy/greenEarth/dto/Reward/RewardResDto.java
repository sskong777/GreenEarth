package com.ssafy.greenEarth.dto.Reward;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Reward;
import lombok.Data;

import javax.persistence.*;

@Data
public class RewardResDto {


    private int id;

    private String rewardName;

    private int rewardCondition;

    private String parentNickname;

    private int child_id;

    public RewardResDto(Reward reward){
        this.id = reward.getId();
        this.rewardName = reward.getName();
        this.rewardCondition = reward.getRewardCondition();
        this.parentNickname = reward.getParentNickname();
        this.child_id = reward.getChild().getId();
    }
}
