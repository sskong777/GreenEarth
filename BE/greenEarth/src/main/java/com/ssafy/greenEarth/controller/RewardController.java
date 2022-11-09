package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.dto.Reward.RewardPutDto;
import com.ssafy.greenEarth.dto.Reward.RewardReqDto;
import com.ssafy.greenEarth.dto.Reward.RewardResDto;
import com.ssafy.greenEarth.service.RewardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("reward")
public class RewardController {

    private final RewardService rewardService;

    // 보상 목록 조회
    @GetMapping("child/{child_id}")
    public ResponseEntity<List<RewardResDto>> getAllRewards(@PathVariable("child_id") int childId){
        List<RewardResDto> data = rewardService.getRewards(childId);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    // 보상 작성
    @PostMapping("child/{child_id}")
    public ResponseEntity<RewardResDto> createReward(@PathVariable("child_id") int childId, @RequestBody RewardReqDto rewardReqDto){
        RewardResDto data = rewardService.createReward(childId,rewardReqDto);
        return new ResponseEntity<>(data, HttpStatus.CREATED);
    }

    // 보상 수정
    @PutMapping("{reward_id}")
    public ResponseEntity<RewardResDto> updateReward(@PathVariable("reward_id") int rewardId, @RequestBody RewardPutDto rewardPutDto){
        RewardResDto data = rewardService.updateReward(rewardId,rewardPutDto);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    // 보상 삭제
    @DeleteMapping("{reward_id}")
    public void deleteReward(@PathVariable("reward_id") int rewardId){
        rewardService.deleteReward(rewardId);
    }

    // 보상 지급 완료
    @PutMapping("{reward_id}/paid")
    public ResponseEntity<RewardResDto> paidReward(@PathVariable("reward_id") int rewardId){
        RewardResDto data = rewardService.paidReward(rewardId);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

}
