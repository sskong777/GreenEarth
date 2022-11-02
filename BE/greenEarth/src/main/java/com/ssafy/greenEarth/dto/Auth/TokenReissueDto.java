package com.ssafy.greenEarth.dto.Auth;

import lombok.Data;

@Data
public class TokenReissueDto {

    private String accessToken;

    private String refreshToken;

}
