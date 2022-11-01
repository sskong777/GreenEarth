package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Parent;
import com.ssafy.greenEarth.domain.Role;
import com.ssafy.greenEarth.dto.Member.*;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.ParentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {

    private final PasswordEncoder passwordEncoder;

    private final ChildRepository childRepository;

    private final ParentRepository parentRepository;

    private final AuthService authService;

    public ParentProfileDto findParent(int parentId) {
        Parent parent = parentRepository.findById(parentId)
                .orElseThrow(() -> new IllegalArgumentException("해당 보호자 프로필을 찾을 수 없습니다."));
        return new ParentProfileDto(parent);
    }

    public ChildProfileDto findChild(int childId) {
        // 아이 프로필 조회
        Child child = childRepository.findChildById(childId)
                .orElseThrow(() -> new IllegalArgumentException("해당 아이 프로필을 찾을 수 없습니다."));
        return new ChildProfileDto(child);
    }

    // 카카오 유저 정보로 회원 확인 후 회원가입 & 로그인
    @Transactional
    public HashMap<String, String> registerParent(ParentRegisterDto parentRegisterDto) {
        Parent parent = parentRepository.findByEmail(parentRegisterDto.getEmail()).orElse(null);
        if (parent == null) {
            parentRepository.save(parentRegisterDto.toEntity());
        }
        Parent newParent = parentRepository.findByEmail(parentRegisterDto.getEmail()).get();
        int parentId = newParent.getId();
        Role parentRole = newParent.getRole();

        String accessToken = authService.createAccessToken(parentId, parentRole);
        String refreshToken = authService.createRefreshToken(parentId, parentRole);

        HashMap<String, String> tokenMap = new HashMap<>();
        tokenMap.put("accessToken", accessToken);
        tokenMap.put("refreshToken", refreshToken);
        return tokenMap;
    }

    @Transactional
    public Child registerChild(ChildRegisterDto childDto, int parentId) {
        // 연결된 보호자 조회
        Parent parent = parentRepository.findById(parentId)
                .orElseThrow(() -> new IllegalArgumentException("연결될 보호자 계정을 찾을 수 없습니다."));
        // 등록
        return childRepository.save(childDto.toEntity(parent, passwordEncoder));
    }

    @Transactional
    public ChildProfileDto updateProfile(int childId, ChildUpdateDto childDto) {
        // 아이 프로필 조회
        Child child = childRepository.findChildById(childId)
                .orElseThrow(() -> new IllegalArgumentException("해당 아이 프로필을 찾을 수 없습니다."));
        // 아이 닉네임 수정
        child.setNickname(childDto.getNickname());
        return new ChildProfileDto(childRepository.save(child));
    }

    // 닉네임 중복 조회
    public String duplicateCheck(String nickname) {
        if (childRepository.findByNickname(nickname).isPresent()) {
            return "이미 존재하는 닉네임입니다.";
        }else {
            return "사용할 수 있는 닉네임입니다.";
        }
    }

    @Transactional
    public void deleteProfile(int id, Role role) {
        if (role == Role.ROLE_PARENT) {
            parentRepository.deleteById(id);
        }else {
            childRepository.deleteById(id);
        }
    }
}
