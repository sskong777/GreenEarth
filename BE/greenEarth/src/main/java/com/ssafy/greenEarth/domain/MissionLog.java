package com.ssafy.greenEarth.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table(name = "mission_logs")
public class MissionLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "log_id")
    private int id;

    private LocalDateTime clearedAt;

    private boolean isPermitted;

    @CreatedDate
    private LocalDateTime createdAt;

    private String parentNickname;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mission_id")
    private Mission mission;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "child_id")
    private Child child;

    public MissionLog(Child child, Mission mission, boolean isPermitted, LocalDateTime createdAt, String parentNickname){
        this.child = child;
        this.mission = mission;
        this.isPermitted = false;
        this.createdAt = createdAt;
        this.parentNickname = "부모 임시";
    }
}
