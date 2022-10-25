package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.MissionLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MissionLogRepository extends JpaRepository<MissionLog, Integer> {
    MissionLog findById(Long id);
}
