package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.GreenEarthLog;
import com.ssafy.greenEarth.domain.GreenEarthLogId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GreenEarthLogRepository extends JpaRepository<GreenEarthLog, GreenEarthLogId> {
}
