package com.ssafy.greenEarth.dto.Mission;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.greenEarth.domain.Mission;
import com.ssafy.greenEarth.domain.MissionLog;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MissionLogResDto {

    @Schema(description = "미션 로그 PK")
    private int id;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy년 MM월 dd일 hh시 mm분", timezone = "Asia/seoul")
    @Schema(description = "미션 완료 시간")
    private LocalDateTime clearedAt;

    @Schema(description = "미션 완료 여부")
    private boolean isPermitted;

    @Schema(description = "미션 생성 시간")
    private LocalDateTime createdAt;

    @Schema(description = "보호자 닉네임")
    private String parentNickname;

    @Schema(description = "미션")
    private Mission mission;

    @Schema(description = "미션 수행하는 아이")
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
