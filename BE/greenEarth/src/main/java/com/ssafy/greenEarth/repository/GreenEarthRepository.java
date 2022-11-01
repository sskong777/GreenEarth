package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.GreenEarth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface GreenEarthRepository extends JpaRepository<GreenEarth, Integer> {

    @Query(value = "SELECT g.green_earth_id" +
            "FROM green_earth g" +
            "WHERE g.mileage_condition <= :mileage" +
            "ORDER BY g.green_earth_id" +
            "DESC LIMIT 1",
            nativeQuery = true)
    int findFirstByMileage_condition(@Param("mileage") int mileage);

}
