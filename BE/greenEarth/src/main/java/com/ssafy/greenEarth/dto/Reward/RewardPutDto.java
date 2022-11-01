package com.ssafy.greenEarth.dto.Reward;

import lombok.Data;

@Data
public class RewardPutDto {


    private String rewardName;

    private int rewardCondition;

    private int childId;

}
