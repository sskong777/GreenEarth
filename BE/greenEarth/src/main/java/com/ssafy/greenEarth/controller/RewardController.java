package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.dto.Reward.RewardPutDto;
import com.ssafy.greenEarth.dto.Reward.RewardReqDto;
import com.ssafy.greenEarth.dto.Reward.RewardResDto;
import com.ssafy.greenEarth.service.RewardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("reward")
public class RewardController {

    private final RewardService rewardService;
    // 보상 목록 조회
    @GetMapping("child/{child_id}")
    public List<RewardResDto> getAllRewards(@PathVariable("child_id") int child_id){
        List<RewardResDto> data = rewardService.getRewards(child_id);
        return data;
    }

    // 보상 작성
    @PostMapping("child/{child_id}")
    public RewardResDto createReward(@PathVariable("child_id") int child_id, @RequestBody RewardReqDto rewardReqDto){
        RewardResDto data = rewardService.createReward(child_id,rewardReqDto);
        return data;
    }

    // 보상 수정
    @PutMapping("{reward_id}")
    public RewardResDto updateReward(@PathVariable("reward_id") int reward_id, @RequestBody RewardPutDto rewardPutDto){
        RewardResDto data = rewardService.updateReward(reward_id,rewardPutDto);

        return data;
    }

    // 보상 삭제
    @DeleteMapping("{reward_id}")
    public void deleteReward(@PathVariable("reward_id") int reward_id){
        rewardService.deleteReward(reward_id);
    }

    // 보상 지급 완료
    @PutMapping("{reward_id}/paid")
    public RewardResDto paidReward(@PathVariable("reward_id") int reward_id){
        RewardResDto data = rewardService.paidReward(reward_id);
        return data;
    }

}
