package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.dto.Game.MileageAddReqDto;
import com.ssafy.greenEarth.dto.Mission.MissionLogResDto;
import com.ssafy.greenEarth.repository.GreenEarthRepository;
import com.ssafy.greenEarth.service.MissionService;
import com.ssafy.greenEarth.service.TestService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api("TestController")
@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping("/test")
public class TestController {

    private final TestService testService;

    private final MissionService missionService;

    private final GreenEarthRepository greenEarthRepository;

    @GetMapping
    public ResponseEntity<String> testApi() {
        String testStr = testService.getTest();
        return new ResponseEntity<>(testStr, HttpStatus.OK);
    }

    @GetMapping("/mission")
    public ResponseEntity<List<MissionLogResDto>> getTodayMissionLogs(){
        List<MissionLogResDto> data = missionService.getTodayMissionLogs(1);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/level")
    public int getLevel(MileageAddReqDto requestDto){
        return greenEarthRepository.findFirstByMileageCondition(15);
    }
}
