package com.ssafy.greenEarth.dto.Member;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Gender;
import com.ssafy.greenEarth.domain.Parent;
import com.ssafy.greenEarth.domain.Role;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@NoArgsConstructor
public class ChildRegisterDto {

    @NotBlank(message = "아이 비밀번호를 입력해주세요")
    @Schema(description = "아이 회원가입 비밀번호")
    private String password;

    @NotBlank(message = "아이 실명을 입력해주세요")
    @Schema(description = "아이 회원가입 실명")
    private String realName;

    @NotBlank(message = "아이 닉네임을 입력해주세요")
    @Schema(description = "아이 회원가입 닉네임")
    private String nickname;

    @NotNull(message = "아이 성별을 입력해주세요")
    @Schema(description = "아이 회원가입 성별")
    private Gender gender;

    @NotNull(message = "아이 생일을 입력해주세요")
    @Schema(description = "아이 회원가입 생일")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthday;

    public Child toEntity(int avatarNum, Parent parent, PasswordEncoder passwordEncoder) {
        return Child.builder()
                .password(passwordEncoder.encode(getPassword()))
                .gender(getGender())
                .nickname(getNickname())
                .realName(getRealName())
                .mileage(0)
                .clearedMission(0)
                .earthLevel(1)
                .birthday(getBirthday())
                .avatar(avatarNum)
                .role(Role.ROLE_CHILD)
                .parent(parent)
                .build();
    }
}
