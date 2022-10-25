package com.ssafy.greenEarth.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class MissionRequestDto {

    private int missionId;
    private String name;
    private String description;
    private int mileage;

}
