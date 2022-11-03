package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ParentRepository extends JpaRepository<Parent, Integer> {

    Optional<Parent> findByEmail(String email);

    @Query("select p from Parent p left join fetch p.childList where p.id =:id")
    Optional<Parent> findById(@Param("id") int id);

}
