package com.ssafy.greenEarth.config;

import com.ssafy.greenEarth.interceptor.AuthenticationInterceptor;
import com.ssafy.greenEarth.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final TokenProvider tokenProvider;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new AuthenticationInterceptor(tokenProvider))
                .order(1)
                .addPathPatterns("/**")
                .excludePathPatterns("/member/signup", "/member/login/**");
    }
}
