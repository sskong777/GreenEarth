package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.GreenEarth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface GreenEarthRepository extends JpaRepository<GreenEarth, Integer> {

    @Query("select g from GreenEarth g where g.mileage_condition >= :mileage")
    Optional<GreenEarth> findFirstByMileage_condition(@Param("mileage") int mileage);

}
