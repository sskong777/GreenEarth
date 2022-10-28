package com.ssafy.greenEarth.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api("GameController")
@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping("/game")
public class GameMileageController {
//
//    public static final Logger logger = LoggerFactory.getLogger(GameMileageController.class);
//
//    private static final String SUCCESS = "success";
//    private static final String FAIL = "fail";
//
//    @ApiOperation(value = "게임 마일리지 적립", notes = "게임 마일리지를 적립한다.")
//    @PostMapping
//    public ResponseEntity<String> updateMileage(@RequestBody int mileage) {
//
//    }
}
