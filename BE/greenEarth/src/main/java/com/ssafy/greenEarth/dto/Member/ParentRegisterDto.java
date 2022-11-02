package com.ssafy.greenEarth.dto.Member;

import com.ssafy.greenEarth.domain.Parent;
import com.ssafy.greenEarth.domain.Role;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ParentRegisterDto {

    @NotBlank(message = "보호자 이메일을 입력해주세요")
    @Schema(description = "보호자 회원가입 이메일")
    private String email;

    @NotBlank(message = "보호자 닉네임을 입력해주세요")
    @Schema(description = "보호자 회원가입 닉네임")
    private String nickname;

    @NotNull(message = "역할을 지정해주세요")
    @Schema(description = "역할")
    private Role role;

    public Parent toEntity() {
        return Parent.builder()
                .email(this.getEmail())
                .nickname(this.getNickname())
                .role(Role.ROLE_PARENT)
                .build();
    }
}
