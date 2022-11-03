package com.ssafy.greenEarth.dto.Mission;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class MissionPutDto {

    @NotNull(message = "mission_id를 입력해주세요")
    @Schema(description = "미션 PK")
    private int missionId;
}
