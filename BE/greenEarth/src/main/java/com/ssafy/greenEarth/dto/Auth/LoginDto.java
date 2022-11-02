package com.ssafy.greenEarth.dto.Auth;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Data
public class LoginDto {

    @NotBlank(message = "ID를 입력해주세요")
    @Schema(description = "아이 로그인 ID")
    private String id;

    @NotEmpty(message = "비밀번호를 입력해주세요")
    @Schema(description = "아이 로그인 비밀번호")
    private String password;

    public String getEmail() {
        return id;
    }
}
