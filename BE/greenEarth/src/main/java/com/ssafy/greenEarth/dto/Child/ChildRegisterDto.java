package com.ssafy.greenEarth.dto.Child;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Gender;
import com.ssafy.greenEarth.domain.Parent;
import com.ssafy.greenEarth.domain.Role;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

@Data
@NoArgsConstructor
public class ChildRegisterDto {

    private String id;

    private String password;

    private String realName;

    private String nickname;

    private Gender gender;

    public Child toEntity(Parent parent, PasswordEncoder passwordEncoder) {
        return Child.builder()
                .email(getId() + "@greenearth.com")
                .password(passwordEncoder.encode(getPassword()))
                .gender(getGender())
                .nickname(getNickname())
                .realName(getRealName())
                .mileage(0)
                .clearedMission(0)
                .earthLevel(0)
                .role(Role.ROLE_CHILD)
                .parent(parent)
                .build();
    }
}
