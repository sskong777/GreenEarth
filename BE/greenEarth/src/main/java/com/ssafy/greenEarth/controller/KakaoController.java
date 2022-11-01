package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Parent;
import com.ssafy.greenEarth.dto.Member.ParentRegisterDto;
import com.ssafy.greenEarth.service.MemberService;
import com.ssafy.greenEarth.service.KakaoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Api("KakaoController")
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/kakao")
public class KakaoController {

    private final KakaoService kakaoService;

    private final MemberService childService;

    @ApiOperation(value = "카카오 로그인 인가 code 발급", notes = "사용자가 카카오 로그인 완료시 인가 code 넘어옴")
    @PostMapping("/login")
    public String adultLogin(@RequestBody String code) {

        // 인가 code를 통해 카카오 OAuth Token 발급
        log.info("인가 code를 통해 카카오 OAuth Token 발급");
        String accessToken = kakaoService.getKakaoAccessToken(code);

        // 추출한 Access Token을 통해 유저 정보 요청
        log.info("추출한 Access Token을 통해 유저 정보 요청");
        ParentRegisterDto parentRegisterDto = kakaoService.getKakaoProfile(accessToken);

        // 유저 정보를 기반으로 회원가입 & 로그인 처리 후 액세스 토큰 반환
        log.info("유저 정보를 기반으로 회원가입 & 로그인 처리");
        return childService.registerParent(parentRegisterDto);
    }

}
