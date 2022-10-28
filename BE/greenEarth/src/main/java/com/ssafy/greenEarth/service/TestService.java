package com.ssafy.greenEarth.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TestService {

    @Transactional
    public String getTest() {
        return "Please, hello, D206! ";
    }
}
