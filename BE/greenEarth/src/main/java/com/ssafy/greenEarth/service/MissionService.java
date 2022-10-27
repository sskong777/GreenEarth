package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Mission;
import com.ssafy.greenEarth.domain.MissionLog;
import com.ssafy.greenEarth.dto.MissionLogResDto;
import com.ssafy.greenEarth.dto.MissionRequestDto;
import com.ssafy.greenEarth.exception.CustomErrorException;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.MissionLogRepository;
import com.ssafy.greenEarth.repository.MissionRepository;
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

    // 오늘의 미션생성
    @Transactional
    public MissionLog saveTodayMission(int child_id, MissionRequestDto missionRequestDto) {
        Mission mission = missionRequestDto.toEntity();
        int missionId = mission.getId();
        System.out.println(missionId);

//        Mission mission = missionRepository.findById(missionId);
//        System.out.println(mission.getId());

        Child child = childRepository.findById(child_id);
        System.out.println("child: " + child);
        LocalDateTime now = LocalDateTime.now();
        MissionLog missionlog = new MissionLog(child, mission,now);
        missionLogRepository.save(missionlog);
        return missionlog;
    }

    // 아이 미션 로그 조회
    @Transactional
    public List<MissionLog> getMissionLogs(int child_id){
        Child child = childRepository.findById(child_id);

        List<MissionLog> data = new ArrayList<>();

        List<MissionLog> missionLogs = child.getMissionLogList();
        for (MissionLog missionLog : missionLogs){
            System.out.println(missionLog.getId());
            data.add(missionLog);
        }

//        List<MissionLog> missionLogs = missionLogRepository.findAll();
        return data;

    }

    // 오늘의 미션 조회
    @Transactional
    public List<MissionLog> getTodayMissionLogs(int child_id){
        Child child = childRepository.findById(child_id);

        List<MissionLog> data = new ArrayList<>();

        List<MissionLog> missionLogs = child.getMissionLogList();
        for (MissionLog missionLog : missionLogs){
            if (missionLog.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyyMMdd"))
                    .equals(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd")))){
                System.out.println(missionLog.getId());
                data.add(missionLog);
            }

        }

//        List<MissionLog> missionLogs = missionLogRepository.findAll();
        return data;

    }

    // 미션 전체 조회
    @Transactional
    public List<Mission> getAllMissions(){
        List<Mission> missions = missionRepository.findAll();
        return missions;
    }

    // 오늘의 미션 승인
    @Transactional
    public MissionLogResDto permitMission(int log_id){
        MissionLog missionLog = missionLogRepository.findById(log_id);
        MissionLogResDto missionLogResDto = new MissionLogResDto(missionLog);
//        System.out.println("오늘의 미션" + missionLogResDto);
        missionLogResDto.setPermitted(true);
        return missionLogResDto;
    }

    // 오늘의 미션 완료
    @Transactional
    public MissionLogResDto clearMission(int log_id){
        MissionLog missionLog = missionLogRepository.findById(log_id);
        MissionLogResDto missionLogResDto = new MissionLogResDto(missionLog);
        LocalDateTime now = LocalDateTime.now();
        missionLogResDto.setClearedAt(now);
        return missionLogResDto;
    }

    // 오늘의 미션 수정



//     오늘의 미션 삭제
    @Transactional
    public void deleteTodayMission(int log_id){
        return ;
    }
}
