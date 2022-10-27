package com.ssafy.greenEarth.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Table(name = "mission_logs")
public class MissionLog extends BaseTimeEntity {

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
    @JsonBackReference
    private Mission mission;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "child_id")
    private Child child;

    public void setPermitted(boolean permitted) {
        isPermitted = permitted;
    }

    public void setClearedAt(LocalDateTime clearedAt) {
        this.clearedAt = clearedAt;
    }

    public void setMission(Mission mission) {
        this.mission = mission;
    }

    public MissionLog(Child child, Mission mission, boolean isPermitted, LocalDateTime createdAt, String parentNickname){
        this.child = child;
        this.mission = mission;
        this.isPermitted = false;
        this.createdAt = createdAt;
        this.parentNickname = "부모 임시";
    }
    public MissionLog(Child child, Mission mission, LocalDateTime createdAt){
        this.child = child;
        this.mission = mission;
        this.isPermitted = false;
        this.parentNickname = "부모 임시";
        this.createdAt = createdAt;
    }
}
