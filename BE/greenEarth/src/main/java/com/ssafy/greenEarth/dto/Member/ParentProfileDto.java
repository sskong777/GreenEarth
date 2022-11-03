package com.ssafy.greenEarth.dto.Member;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Parent;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class ParentProfileDto {

    @Schema(description = "보호자 PK")
    private int parentId;

    @Schema(description = "보호자 이메일")
    private String email;

    @Schema(description = "보호자 닉네임")
    private String nickname;

    @Schema(description = "보호자와 연결된 아이")
    private List<ChildProfileDto> childList;

    private Boolean isParent;

    public ParentProfileDto(Parent parent) {
        this.parentId = parent.getId();
        this.email = parent.getEmail();
        this.nickname = parent.getNickname();
        this.childList = parent.getChildList().stream().map(ChildProfileDto::new).collect(Collectors.toList());
        this.isParent = true;
    }
}
