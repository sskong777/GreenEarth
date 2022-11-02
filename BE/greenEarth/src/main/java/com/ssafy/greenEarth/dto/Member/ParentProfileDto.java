package com.ssafy.greenEarth.dto.Member;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Parent;
import lombok.Data;

import java.util.List;

@Data
public class ParentProfileDto {

    private int parentId;

    private String email;

    private String nickname;

    private List<Child> childList;

    private Boolean isParent;

    public ParentProfileDto(Parent parent) {
        this.parentId = parent.getId();
        this.email = parent.getEmail();
        this.nickname = parent.getNickname();
        this.childList = parent.getChildList();
        this.isParent = true;
    }
}
