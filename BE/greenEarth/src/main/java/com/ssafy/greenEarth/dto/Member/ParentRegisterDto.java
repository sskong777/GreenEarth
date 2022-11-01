package com.ssafy.greenEarth.dto.Member;

import com.ssafy.greenEarth.domain.Parent;
import com.ssafy.greenEarth.domain.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ParentRegisterDto {

    private String email;

    private String nickname;

    private Role role;

    public Parent toEntity() {
        return Parent.builder()
                .email(this.getEmail())
                .nickname(this.getNickname())
                .role(Role.ROLE_PARENT)
                .build();
    }
}
