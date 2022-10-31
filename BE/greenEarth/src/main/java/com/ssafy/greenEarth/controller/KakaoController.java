package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Parent;
import com.ssafy.greenEarth.dto.Member.ParentRegisterDto;
import com.ssafy.greenEarth.service.MemberService;
import com.ssafy.greenEarth.service.KakaoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Api("KakaoController")
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/kakao")
public class KakaoController {

    private final KakaoService kakaoService;

    private final MemberService childService;

    @ApiOperation(value = "카카오 로그인 인가 code 발급", notes = "사용자가 카카오 로그인 완료시 인가 code 넘어옴")
    @GetMapping("/login")
    public void kakaoCallBack(@RequestParam String code) {

        // 인가 code를 통해 카카오 OAuth Token 발급
        log.info("인가 code를 통해 카카오 OAuth Token 발급");
        String accessToken = kakaoService.getKakaoAccessToken(code);

        // 추출한 Access Token을 통해 유저 정보 요청
        log.info("추출한 Access Token을 통해 유저 정보 요청");
        ParentRegisterDto parentRegisterDto = kakaoService.getKakaoProfile(accessToken);

        // 유저 정보를 기반으로 회원가입 & 로그인 처리
        log.info("유저 정보를 기반으로 회원가입 & 로그인 처리");
        Parent parent = childService.registerParent(parentRegisterDto);

    }

}
