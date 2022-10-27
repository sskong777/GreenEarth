package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.Mission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MissionRepository extends JpaRepository<Mission, Integer> {

//    @Query("select m from Mission m join fetch m.missionLogList ml  where m.id = :id")
    Mission findById(int id);

    Optional<Mission> findMissionById(int id);

}
