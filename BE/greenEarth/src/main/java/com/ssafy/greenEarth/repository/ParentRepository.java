package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.Parent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParentRepository extends JpaRepository<Parent, Integer> {

    Optional<Parent> findByNickname(String nickname);

    Optional<Parent> findByEmail(String email);
}
