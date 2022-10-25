package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.Mission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MissionRepository extends JpaRepository<Mission, Integer> {

    Mission findById(Long id);

}
