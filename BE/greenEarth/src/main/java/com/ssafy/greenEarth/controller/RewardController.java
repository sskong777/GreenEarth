package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.dto.Reward.*;
import com.ssafy.greenEarth.service.RewardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("RewardController")
@RestController
@RequiredArgsConstructor
@RequestMapping("reward")
@Slf4j
public class RewardController {

    private final RewardService rewardService;

    // 보상 목록 조회
    @ApiOperation(value = "보상 목록 조회", notes = "아이 보상 목록을 조회한다.")
    @GetMapping("child/{child_id}")
    public ResponseEntity<List<RewardResDto>> getAllRewards(@PathVariable("child_id") int childId){
        log.info("아이 보상 목록 조회: {}", childId);
        List<RewardResDto> data = rewardService.getRewards(childId);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    // 보상 작성
    @ApiOperation(value = "보상 작성", notes = "아이 보상을 설정한다.")
    @PostMapping("child/{child_id}")
    public ResponseEntity<RewardResDto> createReward(@PathVariable("child_id") int childId, @RequestBody RewardReqDto rewardReqDto){
        log.info("아이 보상 작성: {}", childId);
        RewardResDto data = rewardService.createReward(childId,rewardReqDto);
        return new ResponseEntity<>(data, HttpStatus.CREATED);
    }

    // 보상 수정
    @ApiOperation(value = "보상 수정", notes = "아이 보상을 수정한다.")
    @PutMapping("{reward_id}")
    public ResponseEntity<RewardResDto> updateReward(@PathVariable("reward_id") int rewardId, @RequestBody RewardPutDto rewardPutDto){
        log.info("아이 보상 수정: {}", rewardId);
        RewardResDto data = rewardService.updateReward(rewardId,rewardPutDto);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    // 보상 삭제
    @ApiOperation(value = "보상 삭제", notes = "아이 보상을 삭제한다.")
    @DeleteMapping("{reward_id}")
    public void deleteReward(@PathVariable("reward_id") int rewardId) {
        log.info("아이 보상 삭제: {}", rewardId);
        rewardService.deleteReward(rewardId);
    }

    // 보상 지급 완료
    @ApiOperation(value = "보상 지급 완료", notes = "아이 보상 지급을 완료한다.")
    @PutMapping("{reward_id}/paid")
    public ResponseEntity<RewardResDto> paidReward(@PathVariable("reward_id") int rewardId){
        log.info("아이 보상 지급 완료: {}", rewardId);
        RewardResDto data = rewardService.paidReward(rewardId);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

}
