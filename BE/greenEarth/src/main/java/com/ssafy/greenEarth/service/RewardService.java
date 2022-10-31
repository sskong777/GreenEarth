package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Reward;
import com.ssafy.greenEarth.dto.RewardPutDto;
import com.ssafy.greenEarth.dto.RewardReqDto;
import com.ssafy.greenEarth.dto.RewardResDto;
import com.ssafy.greenEarth.exception.CustomErrorException;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.RewardRespository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class RewardService {

    private final ChildRepository childRepository;
    private final RewardRespository rewardRespository;

    // 보상 목록 조회
    @Transactional
    public List<RewardResDto> getRewards(int child_id){
        Child child = childRepository.findById(child_id);

        List<RewardResDto> data = new ArrayList<>();

        List<Reward> rewards = child.getRewardList();
        for (Reward reward : rewards){
            RewardResDto rewardResDto = new RewardResDto(reward);
            data.add(rewardResDto);
        }
        return data;
    }

    // 보상 작성
    @Transactional
    public RewardResDto createReward(int child_id, RewardReqDto rewardReqDto){
        Child child = childRepository.findById(child_id);
        Reward reward = new Reward(rewardReqDto.getId(),rewardReqDto.getRewardName(),rewardReqDto.getRewardCondition(),rewardReqDto.getParentNickname(),child);
        rewardRespository.save(reward);
        RewardResDto data = new RewardResDto(reward);
        return data;
    }

    // 보상 수정
    @Transactional
    public RewardResDto updateReward(int reward_id, RewardPutDto rewardPutDto){
        Reward reward = rewardRespository.findRewardById(reward_id).orElseThrow(
                () -> new CustomErrorException("보상이 없습니다.")
        );
        Child child = childRepository.findById(rewardPutDto.getChildId());

        reward.setName(rewardPutDto.getRewardName());
        reward.setRewardCondition(rewardPutDto.getRewardCondition());
        reward.setChild(child);
        System.out.println(reward.getChild().getId());
        RewardResDto data = new RewardResDto(reward);
        return data;

    }

    // 보상 삭제
    @Transactional
    public void deleteReward(int reward_id){
        Reward reward = rewardRespository.findRewardById(reward_id).orElseThrow(
                () -> new CustomErrorException("보상이 없습니다.")
        );
        rewardRespository.delete(reward);
    }

    // 보상 지급 완료
    @Transactional
    public RewardResDto paidReward(int reward_id){
        Reward reward = rewardRespository.findRewardById(reward_id).orElseThrow(
                () -> new CustomErrorException("보상이 없습니다.")
        );
        RewardResDto data = new RewardResDto(reward);
        return data;
    }

}
