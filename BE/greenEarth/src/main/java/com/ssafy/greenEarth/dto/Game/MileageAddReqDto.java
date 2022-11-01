package com.ssafy.greenEarth.dto.Game;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class MileageAddReqDto {

    @Schema(description = "적립 마일리지")
    private int mileage;
}
