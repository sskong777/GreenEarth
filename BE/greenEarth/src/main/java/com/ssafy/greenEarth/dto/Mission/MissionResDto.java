package com.ssafy.greenEarth.dto.Mission;

import com.ssafy.greenEarth.domain.Mission;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class MissionResDto {

    @Schema(description = "미션 PK")
    private int missionId;

    @Schema(description = "미션 이름")
    private String name;

    @Schema(description = "미션 설명")
    private String description;

    @Schema(description = "미션에 할당된 마일리지")
    private int mileage;

    public  MissionResDto(Mission mission){
        this.missionId = mission.getId();
        this.name = mission.getName();
        this.description = mission.getDescription();
        this.mileage = mission.getMileage();
    }
}
