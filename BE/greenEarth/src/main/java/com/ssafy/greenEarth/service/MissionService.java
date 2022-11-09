package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.*;
import com.ssafy.greenEarth.dto.Mission.*;
import com.ssafy.greenEarth.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

import com.ssafy.greenEarth.exception.BusinessException;
import static com.ssafy.greenEarth.exception.ErrorCode.*;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class MissionService {

    private final ChildRepository childRepository;

    private final MissionRepository missionRepository;

    private final MissionLogRepository missionLogRepository;

    private final ParentRepository parentRepository;

    private final GreenEarthRepository greenEarthRepository;

    private final GreenEarthLogRepository greenEarthLogRepository;

    // 오늘의 미션생성
    // 로그인한 부모 정보가 넘어오는지 확인 필요
    @Transactional
    public MissionLogResDto saveTodayMission(int childId, MissionReqDto missionReqDto, int curUserId) {

        int missionId = missionReqDto.getMissionId();

        Mission mission = missionRepository.findMissionById(missionId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_MISSION)
        );
        Child child = childRepository.findChildById(childId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_ACCOUNT)
        );
        Parent parent = parentRepository.findById(curUserId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_ACCOUNT)
        );

        MissionLog missionlog = new MissionLog(child, mission, parent, LocalDateTime.now());
        return new MissionLogResDto(missionLogRepository.save(missionlog));
    }

    // 아이 미션 로그 조회
    @Transactional
    public List<MissionLogResDto> getMissionLogs(int childId){
        Child child = childRepository.findChildById(childId).orElseThrow(
                ()-> new BusinessException(NOT_EXIST_ACCOUNT)
        );

        List<MissionLogResDto> data = child.getMissionLogList().stream()
                .map(MissionLogResDto::new).collect(Collectors.toList());

        return data;

    }

    // 오늘의 미션 조회
    @Transactional
    public List<MissionLogResDto> getTodayMissionLogs(int childId){
        Child child = childRepository.findChildById(childId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_ACCOUNT)
        );

        String now = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));

        return child.getMissionLogList().stream()
                .filter(m -> m.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyyMMdd")).equals(now))
                .map(MissionLogResDto::new)
                .collect(Collectors.toList());

    }

    // 미션 전체 조회
    // DTO로 바꿔야함
    @Transactional
    public List<Mission> getAllMissions(){
        return missionRepository.findAll();
    }

    @Transactional
    public MissionResDto getMissionDetail(int missionId){
        Mission mission = missionRepository.findMissionById(missionId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_MISSION)
        );

        return new MissionResDto(mission);
    }

    // 오늘의 미션 승인
    @Transactional
    public MissionLogResDto permitMission(int logId){
        MissionLog missionLog = missionLogRepository.findMissionLogById(logId).orElseThrow(
                ()->new BusinessException(NOT_EXIST_MISSION_LOG)
        );

        Child child = childRepository.findChildById(missionLog.getChild().getId()).orElseThrow(
                () -> new BusinessException(NOT_EXIST_ACCOUNT)
        );

        // is_permit -> true
        missionLog.setPermitted(true);
        // cleared_mission 개수 + 1
        int currentMissionCount = child.getClearedMission();
        child.setClearedMission(currentMissionCount+1);

        // mileage 증가
        int beforeMileage = child.getMileage();
        int missionMileage = missionLog.getMission().getMileage();
        int currentMileage = beforeMileage + missionMileage;

        child.setMileage(currentMileage);

        int beforeGreenEarth = child.getEarthLevel();
        int greenEarth = greenEarthRepository.findFirstByMileage_condition(currentMileage);

        if(beforeGreenEarth < greenEarth){
            GreenEarthLogId greenEarthLogId = new GreenEarthLogId(child.getId(), greenEarth);
            GreenEarthLog greenEarthLog = new GreenEarthLog(greenEarthLogId, LocalDateTime.now());
            greenEarthLogRepository.save(greenEarthLog);
            child.setEarthLevel(greenEarth);
        }

        return new MissionLogResDto(missionLog);
    }

    // 오늘의 미션 거절
    @Transactional
    public MissionLogResDto rejectMission(int logId){
        MissionLog missionLog = missionLogRepository.findMissionLogById(logId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_MISSION_LOG)
        );
        // cleared_at -> null
        missionLog.setClearedAt(null);

        return new MissionLogResDto(missionLog);
    }

    // 오늘의 미션 완료
    @Transactional
    public MissionLogResDto clearMission(int logId){
        MissionLog missionLog = missionLogRepository.findMissionLogById(logId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_MISSION_LOG)
        );
        missionLog.setClearedAt(LocalDateTime.now());

        return new MissionLogResDto(missionLog);
    }

    // 오늘의 미션 수정
    @Transactional
    public MissionLogResDto updateTodayMission(int logId, MissionPutDto missionPutDto){
        int MissionId  = missionPutDto.getMissionId();
        Mission updatedMission = missionRepository.findMissionById(MissionId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_MISSION)
        );
        MissionLog missionLog = missionLogRepository.findMissionLogById(logId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_MISSION_LOG)
        );

        missionLog.setMission(updatedMission);
        return new MissionLogResDto(missionLog);
    }

    //  오늘의 미션 삭제
    @Transactional
    public void deleteTodayMission(int logId){
        MissionLog missionLog = missionLogRepository.findMissionLogById(logId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_MISSION_LOG)
        );
        missionLogRepository.delete(missionLog);
    }
}
