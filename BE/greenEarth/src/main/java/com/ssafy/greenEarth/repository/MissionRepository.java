package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.Mission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MissionRepository extends JpaRepository<Mission, Integer> {

    Optional<Mission> findMissionById(int id);

}
