package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Role;
import com.ssafy.greenEarth.dto.Auth.*;
import com.ssafy.greenEarth.dto.Member.ParentRegisterDto;
import com.ssafy.greenEarth.dto.Auth.TokenDto;
import com.ssafy.greenEarth.service.AuthService;
import com.ssafy.greenEarth.service.KakaoService;
import com.ssafy.greenEarth.service.MemberService;

import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;

@Api("AuthController")
@Slf4j
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    private final KakaoService kakaoService;

    private final MemberService memberService;


    @ApiOperation(value = "아이 로그인", notes = "email id와 password 받아서 로그인진행 성공시 token에 JWT를 넘겨줌")
    @PostMapping("/login/child")
    public ResponseEntity<TokenDto> childLogin(@RequestBody LoginDto loginDto) {
        log.info("로그인 요청 : {}", loginDto.getNickname());
        TokenDto data = authService.childLogin(loginDto);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @ApiOperation(value = "로그아웃", notes = "로그아웃 요청 시 refresh token 삭제함")
    @PostMapping("/logout")
    public void logout(HttpServletRequest request) {
        log.info("로그아웃 요청");
        int curUserId = (int) request.getAttribute("curUserId");
        Role curUserRole = (Role) request.getAttribute("curUserRole");
        authService.logout(curUserId, curUserRole);
    }

    @ApiOperation(value = "Access Token 재발급", notes = "access token 과 refresh token 유효성 검증 후 모두 재발급")
    @PostMapping("/token/reissue")
    public ResponseEntity<TokenDto> tokenReissue(@RequestBody TokenDto tokenReissueDto) {
        log.info("refresh 토큰 재발급 요청");
        TokenDto data = authService.tokenReissue(tokenReissueDto);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @ApiOperation(value = "카카오 OAuth 토큰 발급", notes = "인가 코드를 통해 카카오 OAuth 토큰 발급")
    @GetMapping("/login/adult")
    public ResponseEntity<HashMap<String, String>> adultLogin(@RequestParam String code) {

        log.info("{}", code);

        // 인가 code를 통해 카카오 OAuth Token 발급
        log.info("인가 code를 통해 카카오 OAuth Token 발급");
        String accessToken = kakaoService.getKakaoAccessToken(code);
        log.info("OAuth Token 발급 완료");

        // 추출한 Access Token을 통해 유저 정보 요청
        log.info("추출한 Access Token을 통해 유저 정보 요청");
        ParentRegisterDto parentRegisterDto = kakaoService.getKakaoProfile(accessToken);

        // 유저 정보를 기반으로 회원가입 & 로그인 처리
        log.info("유저 정보를 기반으로 회원가입 & 로그인 처리");
        HashMap<String, String> tokens = memberService.registerParent(parentRegisterDto);

        return new ResponseEntity<>(tokens, HttpStatus.OK);
    }
}
