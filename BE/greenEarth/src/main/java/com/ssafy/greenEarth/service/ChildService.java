package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Parent;
import com.ssafy.greenEarth.dto.ChildRegisterDto;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.ParentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ChildService {

    private final ChildRepository childRepository;

    private final ParentRepository parentRepository;

    @Transactional
    public Child registerChild(ChildRegisterDto childDto) {
        // 연결된 보호자 찾기
        Parent parent = parentRepository.findById(1)
                .orElseThrow(() -> new IllegalAccessError(String.format("연결될 보호자 계정을 찾을 수 없습니다.")));
        // 등록
        Child savedChild = childRepository.save(childDto.toEntity(parent));
        return savedChild;
    }
}
