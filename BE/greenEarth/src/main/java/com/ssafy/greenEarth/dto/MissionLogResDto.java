package com.ssafy.greenEarth.dto;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Mission;
import com.ssafy.greenEarth.domain.MissionLog;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
public class MissionLogResDto {

    private int id;

    private LocalDateTime clearedAt;

    private boolean isPermitted;

    private LocalDateTime createdAt;

    private String parentNickname;

    private Mission mission;

    private int child_id;

    public void setClearedAt(LocalDateTime clearedAt) {
        this.clearedAt = clearedAt;
    }

    public void setPermitted(boolean permitted) {
        isPermitted = permitted;
    }

    public MissionLogResDto(MissionLog missionLog) {
        this.id = missionLog.getId();
        this.clearedAt = missionLog.getClearedAt();
        this.isPermitted = missionLog.isPermitted();
        this.createdAt = missionLog.getCreatedAt();
        this.parentNickname = missionLog.getParentNickname();
        this.mission = missionLog.getMission();
        this.child_id = missionLog.getChild().getId();
    }
}
