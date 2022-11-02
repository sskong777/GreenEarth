package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Mission;
import com.ssafy.greenEarth.domain.Role;
import com.ssafy.greenEarth.dto.Mission.*;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.MissionRepository;
import com.ssafy.greenEarth.service.MissionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("mission")
public class MissionController {

    private final ChildRepository childRepository;
    private final MissionRepository mIssionRepository;
    private final MissionService missionService;

    // 오늘의 미션생성
    @PostMapping("/child/{child_id}")
    public MissionLogResDto todayMissionCreate(@PathVariable("child_id") int child_id, @RequestBody MissionReqDto missionReqDto,
                                          HttpServletRequest request){

        int curUserId = (int) request.getAttribute("curUserId");
        Role curUserRole = (Role) request.getAttribute("curUserRole");
        log.info("현재 로그인한 유저 {}", curUserId);
        log.info("Role {}",curUserRole);
        MissionLogResDto data = missionService.saveTodayMission(child_id, missionReqDto, curUserRole, curUserId);

        return data;
    }

    // 미션 전체 조회
    @GetMapping("")
    public List<Mission> getAllMissions(){
        List<Mission> data = missionService.getAllMissions();
        return data;
    }

    // 미션 상세 조회
    @GetMapping("{mission_id}")
    public MissionResDto getMissionDetail(@PathVariable("mission_id") int mission_id){
        MissionResDto data = missionService.getMissionDetail(mission_id);

        return data;
    }

    // 아이 미션 로그 조회
    @GetMapping("/child/{child_id}/log")
    public List<MissionLogResDto>  getmissionLogs(@PathVariable("child_id") int child_id){
        List<MissionLogResDto> data = missionService.getMissionLogs(child_id);

        return data;
    }

    // 오늘의 미션 조회
    @GetMapping("/child/{child_id}/today")
    public List<MissionLogResDto>  getTodaymissionLogs(@PathVariable("child_id") int child_id){
        List<MissionLogResDto> data = missionService.getTodayMissionLogs(child_id);

        return data;
    }

    // 오늘의 미션 승인
    @PutMapping("log/{log_id}/permit")
    public MissionLogResDto permitTodayMission(@PathVariable("log_id") int log_id){
        MissionLogResDto data = missionService.permitMission(log_id);
//        System.out.println(data);
        return data;

    }

    // 오늘의 미션 거절
    @PutMapping("log/{log_id}/reject")
    public MissionLogResDto rejectTodayMission(@PathVariable("log_id") int log_id){
        MissionLogResDto data = missionService.rejectMission(log_id);
//        System.out.println(data);
        return data;

    }

    // 오늘의 미션 완료
    @PutMapping("log/{log_id}/clear")
    public MissionLogResDto clearTodayMission(@PathVariable("log_id") int log_id){
        MissionLogResDto data = missionService.clearMission(log_id);
        return data;

    }

    // 오늘의 미션 수정
    @PutMapping("/log/{log_id}")
    public MissionLogResDto putTodayMission(@PathVariable("log_id") int log_id, @RequestBody MissionPutDto missionPutDto ){
        MissionLogResDto data = missionService.updateTodayMission(log_id, missionPutDto);
        return data;
    }


    // 오늘의 미션 삭제
    @DeleteMapping("/log/{log_id}")
    public void deleteTodayMission(@PathVariable("log_id") int log_id) {
        missionService.deleteTodayMission(log_id);
    }
}
