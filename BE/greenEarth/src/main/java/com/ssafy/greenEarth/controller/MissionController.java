package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Mission;
import com.ssafy.greenEarth.domain.MissionLog;
import com.ssafy.greenEarth.dto.MissionRequestDto;
import com.ssafy.greenEarth.dto.ResponseDto;
import com.ssafy.greenEarth.exception.CustomErrorException;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.MissionRepository;
import com.ssafy.greenEarth.service.MissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("mission")
public class MissionController {

    private final ChildRepository childRepository;
    private final MissionRepository mIssionRepository;
    private final MissionService missionService;

    @PostMapping("/child/{child_id}")
    public ResponseDto todayMissionCreate(@PathVariable("child_id") int child_id, @RequestBody MissionRequestDto missionRequestDto){
        System.out.println(missionRequestDto);
        MissionLog data = missionService.saveTodayMission(child_id, missionRequestDto);

        return new ResponseDto(data);
    }

    @GetMapping("/child/{child_id}/log")
    public ResponseDto  getmissionLogs(@PathVariable("child_id") int child_id){
        List<MissionLog> data = missionService.getissionLogs(child_id);

        return new ResponseDto(data);
    }

    @GetMapping("")
    public ResponseDto getAllMissions(){
        List<Mission> data = missionService.getAllMissions();
        return new ResponseDto(data);
    }
}
