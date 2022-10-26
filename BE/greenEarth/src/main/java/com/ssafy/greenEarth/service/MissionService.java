package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Mission;
import com.ssafy.greenEarth.domain.MissionLog;
import com.ssafy.greenEarth.dto.MissionRequestDto;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.MissionLogRepository;
import com.ssafy.greenEarth.repository.MissionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class MissionService {

    private final ChildRepository childRepository;
    private final MissionRepository missionRepository;
    private final MissionLogRepository missionLogRepository;


    @Transactional
    public MissionLog saveTodayMission(int child_id, MissionRequestDto missionRequestDto) {
        int missionId = missionRequestDto.getMissionId();
        Mission mission = missionRepository.findById(missionId);

//        System.out.println(mission.getId());
        Child child = childRepository.findById(child_id);

        MissionLog missionlog = new MissionLog(child, mission);
        return missionlog;
    }

    @Transactional
    public List<Mission> getAllMissions(){
        List<Mission> missions = missionRepository.findAll();
        return missions;
    }
}
