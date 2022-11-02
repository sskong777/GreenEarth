package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.Child;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ChildRepository extends JpaRepository<Child, Integer> {

    @Query("select c from Child c join fetch c.parent p join fetch c.missionLogList ml join fetch ml.mission m where c.id = :id")
    Optional<Child> findChildById(@Param("id") int id);

    Optional<Child> findByEmail(String email);

    Optional<Child> findByNickname(String nickname);
}
