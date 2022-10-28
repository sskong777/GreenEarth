package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.service.TestService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api("TestController")
@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping("/test")
public class TestController {

    private final TestService testService;

    @GetMapping
    public ResponseEntity<String> testApi() {
        String testStr = testService.getTest();
        return new ResponseEntity<>(testStr, HttpStatus.OK);
    }
}
