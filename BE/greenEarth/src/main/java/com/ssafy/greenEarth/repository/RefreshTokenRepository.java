package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.RefreshToken;
import com.ssafy.greenEarth.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Integer> {

    void deleteBySubjectIdAndSubjectRole(int id, Role role);
}
