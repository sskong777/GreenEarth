package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.dto.ChildRegisterDto;
import com.ssafy.greenEarth.service.ChildService;

import lombok.extern.slf4j.Slf4j;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private static final String SUCCESS = "SUCCESS";
    private static final String FAIL = "FAIL";

    private final ChildService childService;

    // 일반 회원가입
    @PostMapping("/signup")
    public ResponseEntity<String> childSignup(@RequestBody ChildRegisterDto childDto) {
        System.out.println("회원가입 요청: " + childDto.getNickname());
        Child child = childService.registerChild(childDto);
        if (child != null){
            return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(FAIL, HttpStatus.FORBIDDEN);
        }
    }
}
