package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.*;
import com.ssafy.greenEarth.dto.Reward.*;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.RewardRespository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import com.ssafy.greenEarth.exception.BusinessException;
import static com.ssafy.greenEarth.exception.ErrorCode.*;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class RewardService {

    private final ChildRepository childRepository;
    private final RewardRespository rewardRespository;

    // 보상 목록 조회
    @Transactional
    public List<RewardResDto> getRewards(int childId){
        Child child = childRepository.findChildById(childId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_ACCOUNT)
        );

        List<RewardResDto> data = child.getRewardList().stream()
                .map(RewardResDto::new).collect(Collectors.toList());
        return data;
    }

    // 보상 작성
    @Transactional
    public RewardResDto createReward(int childId, RewardReqDto rewardReqDto){
        Child child = childRepository.findChildById(childId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_ACCOUNT)
        );
        Reward reward = rewardReqDto.toEntity(child);
        return new RewardResDto(rewardRespository.save(reward));
    }

    // 보상 수정
    @Transactional
    public RewardResDto updateReward(int rewardId, RewardPutDto rewardPutDto){
        Reward reward = rewardRespository.findRewardById(rewardId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_REWARD)
        );
        Child child = childRepository.findChildById(rewardPutDto.getChildId()).orElseThrow(
                () -> new BusinessException(NOT_EXIST_ACCOUNT)
        );
        reward.setName(rewardPutDto.getRewardName());
        reward.setRewardCondition(rewardPutDto.getRewardCondition());
        reward.setChild(child);

        return new RewardResDto(reward);
    }

    // 보상 삭제
    @Transactional
    public void deleteReward(int rewardId){
        Reward reward = rewardRespository.findRewardById(rewardId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_REWARD)
        );
        rewardRespository.delete(reward);
    }

    // 보상 지급 완료
    @Transactional
    public RewardResDto paidReward(int rewardId){
        Reward reward = rewardRespository.findRewardById(rewardId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_REWARD)
        );
        return new RewardResDto(reward);
    }

}
