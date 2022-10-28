package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.MissionLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MissionLogRepository extends JpaRepository<MissionLog, Integer> {
    MissionLog findById(int id);

    Optional<MissionLog> findMissionLogById(int id);

}
