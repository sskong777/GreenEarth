package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Role;
import com.ssafy.greenEarth.dto.Auth.LoginDto;
import com.ssafy.greenEarth.dto.ResponseDto;
import com.ssafy.greenEarth.jwt.TokenProvider;
import com.ssafy.greenEarth.service.AuthService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@Api("AuthController")
@Slf4j
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

//    @ApiOperation(value = "아이 로그인", notes = "email id와 password 받아서 로그인진행 성공시 token에 JWT를 넘겨줌")
    @ApiOperation(value = "아이 로그인", notes = "email id와 password 받아서 로그인진행")
    @PostMapping("/login/child")
    public ResponseEntity<Map<String,Object>> childLogin(@RequestBody LoginDto loginDto) {
        log.info("로그인 요청 : {}", loginDto.getEmail());

        Map<String, Object> resMap = new HashMap<>();

        HttpStatus status;

        Child child = authService.childLogin(loginDto);

        try {
            if (child != null) {
//                resMap.put("accessToken", authService.createAccessToken(child.getId(), Role.ROLE_CHILD));
//                resMap.put("refreshToken", authService.createRefreshToken(child.getId(), Role.ROLE_CHILD));
                resMap.put("message", "로그인 성공");
                status = HttpStatus.OK;
            } else {
                resMap.put("message", "로그인 실패 : 비밀번호 일치하지 않음");
                status = HttpStatus.BAD_REQUEST;
            }
        } catch(Exception e){
            resMap.put("message", "로그인 실패 : "+ e.getMessage());
            status = HttpStatus.FORBIDDEN;
        }

        return new ResponseEntity<>(resMap, status);
    }
}
