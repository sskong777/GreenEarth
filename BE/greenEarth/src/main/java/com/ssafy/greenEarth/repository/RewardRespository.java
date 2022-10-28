package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Reward;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RewardRespository extends JpaRepository<Reward, Integer> {

    Optional<Reward> findRewardById(int id);

}
