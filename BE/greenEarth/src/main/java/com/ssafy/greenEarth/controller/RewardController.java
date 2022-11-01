package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.dto.ResponseDto;
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
    public ResponseDto getAllRewards(@PathVariable("child_id") int child_id){
        List<RewardResDto> data = rewardService.getRewards(child_id);
        return new ResponseDto(data);
    }

    // 보상 작성
    @PostMapping("child/{child_id}")
    public ResponseDto createReward(@PathVariable("child_id") int child_id, @RequestBody RewardReqDto rewardReqDto){
        RewardResDto data = rewardService.createReward(child_id,rewardReqDto);
        return new ResponseDto(data);
    }

    // 보상 수정
    @PutMapping("{reward_id}")
    public ResponseDto updateReward(@PathVariable("reward_id") int reward_id, @RequestBody RewardPutDto rewardPutDto){
        RewardResDto data = rewardService.updateReward(reward_id,rewardPutDto);

        return new ResponseDto(data);
    }

    // 보상 삭제
    @DeleteMapping("{reward_id}")
    public ResponseDto deleteReward(@PathVariable("reward_id") int reward_id){
        rewardService.deleteReward(reward_id);
        return new ResponseDto("");
    }

    // 보상 지급 완료
    @PutMapping("{reward_id}/paid")
    public ResponseDto paidReward(@PathVariable("reward_id") int reward_id){
        RewardResDto data = rewardService.paidReward(reward_id);
        return new ResponseDto(data);
    }

}
