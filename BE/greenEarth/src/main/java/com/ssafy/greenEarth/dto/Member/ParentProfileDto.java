package com.ssafy.greenEarth.dto.Member;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Parent;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class ParentProfileDto {

    @NotNull(message = "parent_id를 입력해주세요")
    @Schema(description = "보호자 PK")
    private int parentId;

    @NotBlank(message = "이메일을 입력해주세요")
    @Schema(description = "보호자 이메일")
    private String email;

    @NotBlank(message = "닉네임을 입력해주세요")
    @Schema(description = "보호자 닉네임")
    private String nickname;

    @NotNull(message = "연결된 아이를 입력해주세요")
    @Schema(description = "보호자와 연결된 아이")
    private List<Child> childList;

    public ParentProfileDto(Parent parent) {
        this.parentId = parent.getId();
        this.email = parent.getEmail();
        this.nickname = parent.getNickname();
        this.childList = parent.getChildList();
    }
}
