package com.ssafy.greenEarth.dto;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Reward;
import lombok.Data;

import javax.persistence.*;

@Data
public class RewardReqDto {


    private int id;

    private String rewardName;

    private int rewardCondition;

    private String parentNickname;

    private int child_id;

}
