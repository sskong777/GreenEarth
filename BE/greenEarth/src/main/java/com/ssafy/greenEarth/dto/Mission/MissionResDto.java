package com.ssafy.greenEarth.dto.Mission;

import com.ssafy.greenEarth.domain.Mission;
import lombok.Data;

@Data
public class MissionResDto {

    private int missionId;

    private String name;

    private String description;

    private int mileage;

    public  MissionResDto(Mission mission){
        this.missionId = mission.getId();
        this.name = mission.getName();
        this.description = mission.getDescription();
        this.mileage = mission.getMileage();
    }
}
