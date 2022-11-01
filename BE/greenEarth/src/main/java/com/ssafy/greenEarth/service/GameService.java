package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.dto.Member.ChildProfileDto;
import com.ssafy.greenEarth.dto.MileageAddReqDto;
import com.ssafy.greenEarth.repository.ChildRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class GameService {

    private final ChildRepository childRepository;

    @Transactional
    public ChildProfileDto addMileage(int childId, MileageAddReqDto requestDto) {
        Child child = childRepository.findChildById(childId)
                .orElseThrow(() -> new IllegalArgumentException("해당 아이 프로필을 찾을 수 없습니다."));
        int finalMileage = child.getMileage() + requestDto.getMileage();
        child.setMileage(finalMileage);

        return new ChildProfileDto(childRepository.save(child));
    }
}
