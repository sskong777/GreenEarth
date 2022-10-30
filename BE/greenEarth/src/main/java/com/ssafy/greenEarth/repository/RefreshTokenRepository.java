package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.RefreshToken;
import com.ssafy.greenEarth.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Integer> {

    Optional<RefreshToken> findBySubjectIdAndSubjectRole(int id, Role role);

    void deleteBySubjectIdAndSubjectRole(int id, Role role);
}
