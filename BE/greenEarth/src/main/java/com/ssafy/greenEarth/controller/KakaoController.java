package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.dto.Auth.KakaoProfile;
import com.ssafy.greenEarth.dto.Auth.OAuthToken;
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

    @ApiOperation(value = "카카오 로그인 인가 code 발급", notes = "사용자가 카카오 로그인 완료시 인가 code 넘어옴")
    @GetMapping("/login")
    public void kakaoCallBack(@RequestParam String code) {
        System.out.println(code);

        // 인가 code를 통해 카카오 OAuth Token 발급
        OAuthToken token = kakaoService.getKakaoAccessToken(code);

        // 발급받은 OAuth Token에서 Access Token 추출
        String accessToken = token.getAccess_token();

        // 추출한 Access Token을 통해 유저 정보 요청
        KakaoProfile kakaoProfile = kakaoService.getKakaoProfile(accessToken);


    }

}
