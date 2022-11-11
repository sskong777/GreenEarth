package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.*;
import com.ssafy.greenEarth.dto.Member.ChildProfileDto;
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
    public List<MissionLogResDto> saveTodayMission(int childId, MissionReqDto missionReqDto, int curUserId) {

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
        missionLogRepository.save(missionlog);
        return getTodayMissionLogs(childId);
    }

    // 아이 미션 로그 조회
    public List<MissionLogResDto> getMissionLogs(int childId){
        Child child = childRepository.findChildById(childId).orElseThrow(
                ()-> new BusinessException(NOT_EXIST_ACCOUNT)
        );

        return child.getMissionLogList().stream()
                .map(MissionLogResDto::new).collect(Collectors.toList());

    }

    // 오늘의 미션 조회
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
    public List<Mission> getAllMissions(){
        return missionRepository.findAll();
    }

    public MissionResDto getMissionDetail(int missionId){
        Mission mission = missionRepository.findMissionById(missionId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_MISSION)
        );

        return new MissionResDto(mission);
    }

    // 오늘의 미션 승인
    @Transactional
    public List<MissionLogResDto> permitMission(int logId){
        MissionLog missionLog = missionLogRepository.findMissionLogById(logId).orElseThrow(
                ()->new BusinessException(NOT_EXIST_MISSION_LOG)
        );

        Child child = childRepository.findChildById(missionLog.getChild().getId()).orElseThrow(
                () -> new BusinessException(NOT_EXIST_ACCOUNT)
        );

        // is_permit -> true
        missionLog.setPermitted(true);
        // cleared_mission 개수 + 1
        child.setClearedMission(child.getClearedMission()+1);

        // mileage 증가
        int beforeMileage = child.getMileage();
        int missionMileage = missionLog.getMission().getMileage();
        int currentMileage = beforeMileage + missionMileage;

        child.setMileage(currentMileage);

        int beforeGreenEarth = child.getEarthLevel();
        int greenEarth = greenEarthRepository.findFirstByMileageCondition(currentMileage);

        if (beforeGreenEarth < 10 && beforeGreenEarth < greenEarth) {
            greenEarthLogRepository.save(new GreenEarthLog(new GreenEarthLogId(child.getId(), greenEarth), LocalDateTime.now()));
            child.setEarthLevel(greenEarth);
            log.info(child.getNickname() + "의 Earth Level을 " + greenEarth + "(으)로 설정합니다.");
        }
        childRepository.save(child);

        return getTodayMissionLogs(child.getId());
    }

    // 오늘의 미션 거절
    @Transactional
    public List<MissionLogResDto> rejectMission(int logId){
        MissionLog missionLog = missionLogRepository.findMissionLogById(logId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_MISSION_LOG)
        );
        // cleared_at -> null
        missionLog.setClearedAt(null);
        missionLogRepository.save(missionLog);

        return getTodayMissionLogs(missionLog.getChild().getId());
    }

    // 오늘의 미션 완료
    @Transactional
    public List<MissionLogResDto> clearMission(int logId){
        MissionLog missionLog = missionLogRepository.findMissionLogById(logId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_MISSION_LOG)
        );
        missionLog.setClearedAt(LocalDateTime.now());
        missionLogRepository.save(missionLog);

        return getTodayMissionLogs(missionLog.getChild().getId());
    }

    // 오늘의 미션 수정
    @Transactional
    public List<MissionLogResDto> updateTodayMission(int logId, MissionPutDto missionPutDto){
        int MissionId  = missionPutDto.getMissionId();
        Mission updatedMission = missionRepository.findMissionById(MissionId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_MISSION)
        );
        MissionLog missionLog = missionLogRepository.findMissionLogById(logId).orElseThrow(
                () -> new BusinessException(NOT_EXIST_MISSION_LOG)
        );

        missionLog.setMission(updatedMission);
        missionLogRepository.save(missionLog);

        return getTodayMissionLogs(missionLog.getChild().getId());
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
