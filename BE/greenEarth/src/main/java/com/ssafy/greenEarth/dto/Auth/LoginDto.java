package com.ssafy.greenEarth.dto.Auth;

import lombok.Data;

@Data
public class LoginDto {

    private String id;

    private String password;

    public String getEmail() {
        return id + "@greenearth.com";
    }
}
