package com.ssafy.greenEarth.dto;

import com.ssafy.greenEarth.domain.Mission;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class MissionRequestDto {

    private int missionId;

    public Mission toEntity() {
        Mission mission = new Mission(getMissionId());
        return mission;
    }
}
