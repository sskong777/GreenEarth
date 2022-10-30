package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Role;
import com.ssafy.greenEarth.dto.Auth.LoginDto;
import com.ssafy.greenEarth.service.AuthService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Api("AuthController")
@Slf4j
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @ApiOperation(value = "아이 로그인", notes = "email id와 password 받아서 로그인진행 성공시 token에 JWT를 넘겨줌")
    @PostMapping("/login/child")
    public ResponseEntity<Map<String,Object>> childLogin(@RequestBody LoginDto loginDto) {
        log.info("로그인 요청 : {}", loginDto.getEmail());

        Map<String, Object> resMap = new HashMap<>();

        HttpStatus status;

        Child child = authService.childLogin(loginDto);

        try {
            if (child != null) {
                resMap.put("accessToken", authService.createAccessToken(child.getId(), Role.ROLE_CHILD));
                resMap.put("refreshToken", authService.createRefreshToken(child.getId(), Role.ROLE_CHILD));
                resMap.put("message", "로그인 성공");
                log.info("로그인 성공 : {}", loginDto.getEmail());
                status = HttpStatus.OK;
            } else {
                resMap.put("message", "로그인 실패 : 비밀번호 일치하지 않음");
                log.info("로그인 실패 (비밀번호 오류) : {}", loginDto.getEmail());
                status = HttpStatus.BAD_REQUEST;
            }
        } catch(Exception e){
            resMap.put("message", "로그인 실패 : "+ e.getMessage());
            log.info("로그인 실패 ({}) : {}", e.getMessage(), loginDto.getEmail());
            status = HttpStatus.FORBIDDEN;
        }

        return new ResponseEntity<>(resMap, status);
    }

    @ApiOperation(value = "카카오 로그인 url", notes = "카카오 로그인 url을 반환")
    @GetMapping("/login/adult")
    public String kakaoLoginURL() {

        String REST_API_KEY = "2045a52f644e0bfc27a039cf2bef8568";
        String REDIRECT_URI = "http://k7d206.p.ssafy.io/api/kakao/login";

        return String.format("kauth.kakao.com/oauth/authorize?client_id=%s&redirect_uri=%s&response_type=code", REST_API_KEY, REDIRECT_URI);


    }


}
