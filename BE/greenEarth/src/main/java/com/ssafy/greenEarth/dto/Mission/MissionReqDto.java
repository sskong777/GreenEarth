package com.ssafy.greenEarth.dto.Mission;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotNull;

@Getter
@RequiredArgsConstructor
public class MissionReqDto {

    @NotNull(message = "mission_id를 입력해주세요")
    @Schema(description = "미션 PK")
    private int missionId;

}
