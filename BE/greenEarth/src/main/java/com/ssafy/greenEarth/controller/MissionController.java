package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Mission;
import com.ssafy.greenEarth.dto.MissionLogResDto;
import com.ssafy.greenEarth.dto.MissionPutDto;
import com.ssafy.greenEarth.dto.MissionRequestDto;
import com.ssafy.greenEarth.dto.ResponseDto;
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

    // 오늘의 미션생성
    @PostMapping("/child/{child_id}")
    public ResponseDto todayMissionCreate(@PathVariable("child_id") int child_id, @RequestBody MissionRequestDto missionRequestDto){
        System.out.println(missionRequestDto);
        MissionLogResDto data = missionService.saveTodayMission(child_id, missionRequestDto);

        return new ResponseDto(data);
    }

    // 미션 전체 조회
    @GetMapping("")
    public ResponseDto getAllMissions(){
        List<Mission> data = missionService.getAllMissions();
        return new ResponseDto(data);
    }

    // 아이 미션 로그 조회
    @GetMapping("/child/{child_id}/log")
    public ResponseDto  getmissionLogs(@PathVariable("child_id") int child_id){
        List<MissionLogResDto> data = missionService.getMissionLogs(child_id);

        return new ResponseDto(data);
    }

    // 오늘의 미션 조회
    @GetMapping("/child/{child_id}/today")
    public ResponseDto  getTodaymissionLogs(@PathVariable("child_id") int child_id){
        List<MissionLogResDto> data = missionService.getTodayMissionLogs(child_id);

        return new ResponseDto(data);
    }

    // 오늘의 미션 승인
    @PutMapping("log/{log_id}/permit")
    public ResponseDto permitTodayMission(@PathVariable("log_id") int log_id){
        MissionLogResDto data = missionService.permitMission(log_id);
//        System.out.println(data);
        return new ResponseDto(data);

    }

    // 오늘의 미션 완료
    @PutMapping("log/{log_id}/clear")
    public ResponseDto clearTodayMission(@PathVariable("log_id") int log_id){
        MissionLogResDto data = missionService.clearMission(log_id);
        return new ResponseDto(data);

    }

    // 오늘의 미션 수정
    @PutMapping("/log/{log_id}")
    public ResponseDto putTodayMission(@PathVariable("log_id") int log_id, @RequestBody MissionPutDto missionPutDto ){
        MissionLogResDto data = missionService.updateTodayMission(log_id, missionPutDto);
        return new ResponseDto(data);
    }


    // 오늘의 미션 삭제
    @DeleteMapping("/log/{log_id}")
    public ResponseDto deleteTodayMission(@PathVariable("log_id") int log_id) {
        missionService.deleteTodayMission(log_id);
        return new ResponseDto("");
    }
}
