package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.*;
import com.ssafy.greenEarth.dto.Mission.MissionLogResDto;
import com.ssafy.greenEarth.dto.Mission.MissionPutDto;
import com.ssafy.greenEarth.dto.Mission.MissionReqDto;
import com.ssafy.greenEarth.dto.Mission.MissionResDto;
import com.ssafy.greenEarth.exception.CustomErrorException;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.MissionLogRepository;
import com.ssafy.greenEarth.repository.MissionRepository;
import com.ssafy.greenEarth.repository.ParentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class MissionService {

    private final ChildRepository childRepository;
    private final MissionRepository missionRepository;
    private final MissionLogRepository missionLogRepository;
    private final ParentRepository parentRepository;

    // 오늘의 미션생성
    // 로그인한 부모 정보가 넘어오는지 확인 필요
    @Transactional
    public MissionLogResDto saveTodayMission(int child_id, MissionReqDto missionReqDto, Role curUserRole, int curUserId) {
        int missionId = missionReqDto.getMissionId();
        Mission mission = missionRepository.findMissionById(missionId).orElseThrow(
                () -> new CustomErrorException("미션이 존재하지 않습니다.")
        );
        Child child = childRepository.findChildById(child_id).orElseThrow(
                () -> new CustomErrorException("아이가 존재하지 않습니다.")
        );

        Parent parent = parentRepository.findParentById(curUserId).orElseThrow(
                () -> new CustomErrorException("부모가 존재하지 않습니다.")
        );

        LocalDateTime now = LocalDateTime.now();

        MissionLog missionlog = new MissionLog(child, mission, parent, now);
        missionLogRepository.save(missionlog);
        MissionLogResDto missionLogResDto = new MissionLogResDto(missionlog);
        return missionLogResDto;
    }

    // 아이 미션 로그 조회
    @Transactional
    public List<MissionLogResDto> getMissionLogs(int child_id){
        Child child = childRepository.findChildById(child_id).orElseThrow(
                ()-> new CustomErrorException("아이가 존재하지 않습니다.")
        );

        List<MissionLogResDto> data = new ArrayList<>();

        List<MissionLog> missionLogs = child.getMissionLogList();
        for (MissionLog missionLog : missionLogs){
            MissionLogResDto missionLogResDto = new MissionLogResDto(missionLog);
            data.add(missionLogResDto);
        }
        return data;

    }

    // 오늘의 미션 조회
    @Transactional
    public List<MissionLogResDto> getTodayMissionLogs(int child_id){
        Child child = childRepository.findChildById(child_id).orElseThrow(
                () -> new CustomErrorException("아이가 존재하지 않습니다.")
        );

        List<MissionLogResDto> data = new ArrayList<>();

        List<MissionLog> missionLogs = child.getMissionLogList();
        for (MissionLog missionLog : missionLogs){
            if (missionLog.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyyMMdd"))
                    .equals(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd")))){
                MissionLogResDto missionLogResDto = new MissionLogResDto(missionLog);
                data.add(missionLogResDto);
            }

        }
        return data;

    }

    // 미션 전체 조회
    // DTO로 바꿔야함
    @Transactional
    public List<Mission> getAllMissions(){
        List<Mission> missions = missionRepository.findAll();
        return missions;
    }

    @Transactional
    public MissionResDto getMissionDetail(int mission_id){
        Mission mission = missionRepository.findMissionById(mission_id).orElseThrow(
                () -> new CustomErrorException("미션이 존재하지 않습니다.")
        );

        MissionResDto missionResDto = new MissionResDto(mission);
        return missionResDto;
    }

    // 오늘의 미션 승인
    @Transactional
    public MissionLogResDto permitMission(int log_id){
        MissionLog missionLog = missionLogRepository.findMissionLogById(log_id).orElseThrow(
                ()->new CustomErrorException("미션 로그가 존재하지 않습니다.")
        );
        // is_permit -> true
        missionLog.setPermitted(true);
        // cleared_mission 개수 + 1
        int curruentMissionCount = missionLog.getChild().getClearedMission();
        missionLog.getChild().setClearedMission(curruentMissionCount+1);

        // mileage 증가
        int currentMileage = missionLog.getChild().getMileage();
        int missionMileage = missionLog.getMission().getMileage();
        missionLog.getChild().setMileage(currentMileage+missionMileage);

        MissionLogResDto missionLogResDto = new MissionLogResDto(missionLog);

        return missionLogResDto;
    }

    // 오늘의 미션 승인
    @Transactional
    public MissionLogResDto rejectMission(int log_id){
        MissionLog missionLog = missionLogRepository.findMissionLogById(log_id).orElseThrow(
                ()->new CustomErrorException("미션 로그가 존재하지 않습니다.")
        );
        // cleared_at -> null
        missionLog.setClearedAt(null);

        MissionLogResDto missionLogResDto = new MissionLogResDto(missionLog);

        return missionLogResDto;
    }

    // 오늘의 미션 완료
    @Transactional
    public MissionLogResDto clearMission(int log_id){
        MissionLog missionLog = missionLogRepository.findMissionLogById(log_id).orElseThrow(
                () -> new CustomErrorException("미션 로그가 존재하지 않습니다.")
        );
        LocalDateTime now = LocalDateTime.now();
        missionLog.setClearedAt(now);

        MissionLogResDto missionLogResDto = new MissionLogResDto(missionLog);
        return missionLogResDto;
    }

    // 오늘의 미션 수정
    @Transactional
    public MissionLogResDto updateTodayMission(int log_id, MissionPutDto missionPutDto){
        int MissionId  = missionPutDto.getMissionId();
        Mission updatedMission = missionRepository.findMissionById(MissionId).orElseThrow(
                () -> new CustomErrorException("미션이 존재하지 않습니다.")
        );
        MissionLog missionLog = missionLogRepository.findMissionLogById(log_id).orElseThrow(
                () -> new CustomErrorException("미션 로그가 존재하지 않습니다.")
        );

        missionLog.setMission(updatedMission);
        MissionLogResDto missionLogResDto = new MissionLogResDto(missionLog);
        return missionLogResDto;
    }



//     오늘의 미션 삭제
    @Transactional
    public void deleteTodayMission(int log_id){
        MissionLog missionLog = missionLogRepository.findMissionLogById(log_id).orElseThrow(
                () -> new CustomErrorException("미션 로그가 존재하지 않습니다.")
        );

        missionLogRepository.delete(missionLog);
    }
}
