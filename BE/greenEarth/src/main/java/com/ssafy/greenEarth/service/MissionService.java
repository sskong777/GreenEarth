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

import javax.transaction.Transactional;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class MissionService {

    private final ChildRepository childRepository;
    private final MissionRepository missionRepository;
    private final MissionLogRepository missionLogRepository;

    @Transactional
    public void saveTodayMission(Child child, Mission mission) {
        MissionLog missionLog = new MissionLog(child, mission);


    }
}
