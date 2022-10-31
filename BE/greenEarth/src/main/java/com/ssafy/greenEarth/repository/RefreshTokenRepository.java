package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.RefreshToken;
import com.ssafy.greenEarth.domain.RefreshTokenId;
import com.ssafy.greenEarth.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, RefreshTokenId> {

//    Optional<RefreshToken> findBySubjectIdAndSubjectRole(int id, Role role);
    Optional<RefreshToken> findById(RefreshTokenId id);

//    void deleteBySubjectIdAndSubjectRole(int id, Role role);
    void deleteById(RefreshTokenId id);
}
