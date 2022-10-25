package com.ssafy.greenEarth.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "green_earth_logs")
public class GreenEarthLog {

    @EmbeddedId
    private GreenEarthLogId id;

    @CreatedDate
    private LocalDateTime clearedAt;
}
