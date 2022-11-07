package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Role;
import com.ssafy.greenEarth.dto.Member.*;
import com.ssafy.greenEarth.service.MemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Api("MemberController")
@Slf4j
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @ApiOperation(value = "아이 프로필 조회", notes = "아이 ID 받아서 프로필 전달")
    @GetMapping("/child/{childId}")
    public ResponseEntity<ChildProfileDto> getChildProfile(@PathVariable int childId) {
        ChildProfileDto data = memberService.findChild(childId);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @ApiOperation(value = "본인 회원 정보 조회", notes = "토큰 ID 받아서 프로필 전달")
    @GetMapping()
    public ResponseEntity<?> getProfile(HttpServletRequest request) {
        int curUserId = (int) request.getAttribute("curUserId");
        Role curUserRole = (Role) request.getAttribute("curUserRole");
        if (curUserRole == Role.ROLE_PARENT) {
            ParentProfileDto data = memberService.findParent(curUserId);
            return new ResponseEntity<>(data, HttpStatus.OK);
        }else {
            ChildProfileDto data = memberService.findChild(curUserId);
            return new ResponseEntity<>(data, HttpStatus.OK);
        }
    }

    @ApiOperation(value = "아이 등록", notes = "아이 등록 및 현재 접속 중인 보호자 계정과 연결")
    @PostMapping("/signup")
    public ResponseEntity<Child> signup(@RequestBody ChildRegisterDto childDto, HttpServletRequest request) {
        int curUserId = (int) request.getAttribute("curUserId");
        Child data = memberService.registerChild(childDto, curUserId);
        return new ResponseEntity<>(data, HttpStatus.CREATED);
    }

    @ApiOperation(value = "닉네임 중복 확인", notes = "유저 닉네임 받아 중복 확인")
    @GetMapping("/check/{nickname}")
    public ResponseEntity<String> duplicateCheck(@PathVariable String nickname) {
        return new ResponseEntity<>(memberService.duplicateCheck(nickname), HttpStatus.OK);
    }

    @ApiOperation(value = "아이 닉네임 수정", notes = "아이 nickname 수정 후 아이 프로필 정보 전달")
    @PutMapping("/child/{childId}")
    public ResponseEntity<ChildProfileDto> updateProfile(@PathVariable int childId, @RequestBody ChildUpdateDto childDto) {
        return new ResponseEntity<>(memberService.updateProfile(childId, childDto), HttpStatus.OK);
    }

    @ApiOperation(value = "회원 탈퇴", notes = "토큰 ID 받아서 회원 탈퇴")
    @DeleteMapping
    public void deleteProfile(HttpServletRequest request) {
        log.info("delete controller 실행");
        int curUserId = (int) request.getAttribute("curUserId");
        Role curUserRole = (Role) request.getAttribute("curUserRole");
        memberService.deleteProfile(curUserId, curUserRole);
    }
}
