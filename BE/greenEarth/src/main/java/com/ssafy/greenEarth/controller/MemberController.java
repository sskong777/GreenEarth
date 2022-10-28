package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.dto.Child.ChildProfileDto;
import com.ssafy.greenEarth.dto.Child.ChildRegisterDto;
import com.ssafy.greenEarth.dto.ResponseDto;
import com.ssafy.greenEarth.service.ChildService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api("MemberController")
@Slf4j
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private static final String SUCCESS = "SUCCESS";
    private static final String FAIL = "FAIL";

    private final ChildService childService;

    @ApiOperation(value = "아이 프로필 조회", notes = "아이 ID 받아서 프로필 전달")
    @GetMapping("/child/{childId}")
    public ResponseDto profile(@PathVariable int childId) {
        ChildProfileDto data = childService.findChild(childId);
        return new ResponseDto(data);
    }

    @ApiOperation(value = "아이 등록", notes = "아이 등록 및 현재 접속 중인 보호자 계정과 연결")
    @PostMapping("/signup")
    public ResponseEntity<String> childSignup(@RequestBody ChildRegisterDto childDto) {
        Child child = childService.registerChild(childDto);
        if (child != null){
            return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(FAIL, HttpStatus.FORBIDDEN);
        }
    }

}
