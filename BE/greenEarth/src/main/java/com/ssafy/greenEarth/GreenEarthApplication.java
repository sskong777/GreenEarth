package com.ssafy.greenEarth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class GreenEarthApplication {

	public static void main(String[] args) {
		SpringApplication.run(GreenEarthApplication.class, args);
	}

}
