package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Role;
import com.ssafy.greenEarth.dto.Auth.LoginDto;
import com.ssafy.greenEarth.dto.Auth.TokenIssueDto;
import com.ssafy.greenEarth.dto.Auth.TokenResDto;
import com.ssafy.greenEarth.dto.Child.ParentRegisterDto;
import com.ssafy.greenEarth.dto.ResponseDto;
import com.ssafy.greenEarth.service.AuthService;
import com.ssafy.greenEarth.service.ChildService;
import com.ssafy.greenEarth.service.KakaoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import javax.servlet.http.HttpServletRequest;

@Api("AuthController")
@Slf4j
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    private final KakaoService kakaoService;

    private final ChildService childService;

    @ApiOperation(value = "아이 로그인", notes = "email id와 password 받아서 로그인진행 성공시 token에 JWT를 넘겨줌")
    @PostMapping("/login/child")
    public ResponseDto childLogin(@RequestBody LoginDto loginDto) {
        log.info("로그인 요청 : {}", loginDto.getEmail());
        TokenResDto tokenResDto = authService.childLogin(loginDto);
        return new ResponseDto(tokenResDto);
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
    @PostMapping("/token_issue")
    public ResponseDto tokenIssue(@RequestBody TokenIssueDto tokenIssueDto, HttpServletRequest request) {
        // interceptor 예외 처리해서 둘다 유효한 경우에만 들어오도록 하자 (access 는 만료, refresh 는 만료 x)
        log.info("refresh 토큰 재발급 요청");
        int curUserId = (int) request.getAttribute("curUserId");
        Role curUserRole = (Role) request.getAttribute("curUserRole");
        TokenResDto tokenResDto = authService.tokenIssue(tokenIssueDto, curUserId, curUserRole);
        return new ResponseDto(tokenResDto);
    }

    @ApiOperation(value = "카카오 로그인 인가 code 발급", notes = "사용자가 카카오 로그인 완료시 인가 code 넘어옴")
    @PostMapping("/adult")
    public ResponseEntity<HashMap<String, String>> adultLogin(@RequestParam String code) {

        // 인가 code를 통해 카카오 OAuth Token 발급
        log.info("인가 code를 통해 카카오 OAuth Token 발급");
        String accessToken = kakaoService.getKakaoAccessToken(code);

        // 추출한 Access Token을 통해 유저 정보 요청
        log.info("추출한 Access Token을 통해 유저 정보 요청");
        ParentRegisterDto parentRegisterDto = kakaoService.getKakaoProfile(accessToken);

        // 유저 정보를 기반으로 회원가입 & 로그인 처리
        log.info("유저 정보를 기반으로 회원가입 & 로그인 처리");
        HashMap<String, String> tokens = childService.registerParent(parentRegisterDto);

        return new ResponseEntity<>(tokens, HttpStatus.OK);
    }

//    @ApiOperation(value = "카카오 로그인 url", notes = "카카오 로그인 url을 반환")
//    @GetMapping("/login/adult")
//    public String kakaoLoginURL() {
//
//        String REST_API_KEY = "2045a52f644e0bfc27a039cf2bef8568";
//        String REDIRECT_URI = "http://localhost:8881/api/kakao/login";
//
//        return String.format("https://kauth.kakao.com/oauth/authorize?client_id=%s&redirect_uri=%s&response_type=code", REST_API_KEY, REDIRECT_URI);
//
//
//    }


}
