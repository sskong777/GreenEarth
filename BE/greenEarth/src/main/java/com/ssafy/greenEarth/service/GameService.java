package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.*;
import com.ssafy.greenEarth.dto.Member.ChildProfileDto;
import com.ssafy.greenEarth.dto.Game.MileageAddReqDto;
import com.ssafy.greenEarth.exception.BusinessException;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.GreenEarthLogRepository;
import com.ssafy.greenEarth.repository.GreenEarthRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

import static com.ssafy.greenEarth.exception.ErrorCode.NOT_EXIST_ACCOUNT;


@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class GameService {

    private final ChildRepository childRepository;

    private final GreenEarthLogRepository greenEarthLogRepository;

    private final GreenEarthRepository greenEarthRepository;

    // 마일리지 적립 및 지구 레벨 변화 로그 저장
    @Transactional
    public ChildProfileDto addMileage(int childId, MileageAddReqDto requestDto) {
        Child child = childRepository.findChildById(childId)
                .orElseThrow(() -> new BusinessException(NOT_EXIST_ACCOUNT));

        log.info("아이를 찾았습니다.");
        int finalMileage = child.getMileage() + requestDto.getMileage();
        child.setMileage(finalMileage);
        log.info(child.getNickname() + "에게 " + requestDto.getMileage() + "마일리지를 적립합니다.");


        int curEarthLevel = greenEarthRepository.findFirstByMileageCondition(finalMileage);
        log.info("{}", curEarthLevel);

        if (child.getEarthLevel() < 10 && child.getEarthLevel() < curEarthLevel) {
            greenEarthLogRepository.save(new GreenEarthLog(new GreenEarthLogId(childId, curEarthLevel), LocalDateTime.now()));
            child.setEarthLevel(curEarthLevel);
            log.info(child.getNickname() + "의 Earth Level을 " + curEarthLevel + "(으)로 설정합니다.");
        }
        return new ChildProfileDto(childRepository.save(child));
    }
}
