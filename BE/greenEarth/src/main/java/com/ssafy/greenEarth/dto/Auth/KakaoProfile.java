package com.ssafy.greenEarth.dto.Auth;

import lombok.Data;

@Data
public class KakaoProfile {

    private String connected_at;
    private KakaoAccount kakao_account;

    @Data
    public static class KakaoAccount {
        private String email;
        private Profile profile;

        @Data
        public static class Profile {
            private String nickname;
        }

    }
}
