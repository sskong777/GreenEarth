package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.dto.Member.ChildProfileDto;
import com.ssafy.greenEarth.dto.Game.MileageAddReqDto;
import com.ssafy.greenEarth.exception.BusinessException;
import com.ssafy.greenEarth.exception.ErrorCode;
import com.ssafy.greenEarth.repository.ChildRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.ssafy.greenEarth.exception.ErrorCode.NOT_EXIST_ACCOUNT;


@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class GameService {

    private final ChildRepository childRepository;

    @Transactional
    public ChildProfileDto addMileage(int childId, MileageAddReqDto requestDto) {
        Child child = childRepository.findChildById(childId)
                .orElseThrow(() -> new BusinessException(NOT_EXIST_ACCOUNT));
        int finalMileage = child.getMileage() + requestDto.getMileage();
        child.setMileage(finalMileage);
        log.info(child.getNickname() + "에게 " + requestDto.getMileage() + "마일리지를 적립합니다.");

        return new ChildProfileDto(childRepository.save(child));
    }
}
