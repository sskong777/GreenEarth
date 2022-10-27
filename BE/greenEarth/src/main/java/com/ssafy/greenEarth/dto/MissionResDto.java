package com.ssafy.greenEarth.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.greenEarth.domain.Mission;
import com.ssafy.greenEarth.domain.MissionLog;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
public class MissionResDto {

    private int id;

    private String name;

    private String description;

    private int mileage;

    public  MissionResDto(Mission mission){
        this.id = mission.getId();
        this.name = mission.getName();
        this.description = mission.getDescription();
        this.mileage = mission.getMileage();
    }
}
