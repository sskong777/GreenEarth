package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.MissionLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MissionLogRepository extends JpaRepository<MissionLog, Integer> {
    MissionLog findById(int id);

    @Query("select ml from MissionLog ml join fetch ml.mission m where ml.id = :id")
    Optional<MissionLog> findMissionLogById(@Param("id") int id);

}
