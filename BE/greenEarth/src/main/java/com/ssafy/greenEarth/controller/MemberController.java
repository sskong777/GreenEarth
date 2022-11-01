package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Role;
import com.ssafy.greenEarth.dto.Member.ChildProfileDto;
import com.ssafy.greenEarth.dto.Member.ChildUpdateDto;
import com.ssafy.greenEarth.dto.Member.ChildRegisterDto;
import com.ssafy.greenEarth.dto.Member.ParentProfileDto;
import com.ssafy.greenEarth.dto.ResponseDto;
import com.ssafy.greenEarth.service.MemberService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Api("ChildController")
@Slf4j
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private static final String SUCCESS = "SUCCESS";
    private static final String FAIL = "FAIL";

    private final MemberService childService;

    @ApiOperation(value = "아이 프로필 조회", notes = "아이 ID 받아서 프로필 전달")
    @GetMapping("/child/{childId}")
    public ResponseDto getChildProfile(@PathVariable int childId) {
        ChildProfileDto data = childService.findChild(childId);
        return new ResponseDto(data);
    }

    @ApiOperation(value = "본인 회원 정보 조회", notes = "토큰 ID 받아서 프로필 전달")
    @GetMapping("/member")
    public ResponseDto getProfile(HttpServletRequest request) {
        int curUserId = (int) request.getAttribute("curUserId");
        Role curUserRole = (Role) request.getAttribute("curUserRole");
        if (curUserRole == Role.ROLE_PARENT) {
            ParentProfileDto data = childService.findParent(curUserId);
            return new ResponseDto(data);
        }else {
            ChildProfileDto data = childService.findChild(curUserId);
            return new ResponseDto(data);
        }
    }

    @ApiOperation(value = "아이 등록", notes = "아이 등록 및 현재 접속 중인 보호자 계정과 연결")
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody ChildRegisterDto childDto, HttpServletRequest request) {
        int curUserId = (int) request.getAttribute("curUserId");
        Child child = childService.registerChild(childDto, curUserId);
        if (child != null){
            return new ResponseEntity<>(SUCCESS, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(FAIL, HttpStatus.FORBIDDEN);
        }
    }

    @ApiOperation(value = "닉네임 중복 확인", notes = "유저 닉네임 받아 중복 확인")
    @GetMapping("/check/{nickname}")
    public ResponseEntity<String> duplcateCheck(@PathVariable String nickname) {
        return new ResponseEntity<>(childService.duplicateCheck(nickname), HttpStatus.OK);
    }

    @ApiOperation(value = "아이 닉네임 수정", notes = "아이 nickname 수정 후 아이 프로필 정보 전달")
    @PutMapping("/child/{childId}")
    public ResponseDto updateProfile(@PathVariable int childId, @RequestBody ChildUpdateDto childDto) {
        ChildProfileDto data = childService.updateProfile(childId, childDto);
        return new ResponseDto(data);
    }

    @ApiOperation(value = "회원 탈퇴", notes = "토큰 ID 받아서 회원 탈퇴")
    @DeleteMapping
    public void deleteProfile(HttpServletRequest request) {
        log.info("delete controller 실행");
        int curUserId = (int) request.getAttribute("curUserId");
        Role curUserRole = (Role) request.getAttribute("curUserRole");
        childService.deleteProfile(curUserId, curUserRole);
    }

}
