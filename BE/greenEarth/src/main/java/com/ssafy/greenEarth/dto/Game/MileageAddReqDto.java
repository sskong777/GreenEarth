package com.ssafy.greenEarth.dto.Game;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class MileageAddReqDto {

    @NotNull(message = "마일리지를 입력해주세요")
    @Schema(description = "적립 마일리지")
    private int mileage;
}
