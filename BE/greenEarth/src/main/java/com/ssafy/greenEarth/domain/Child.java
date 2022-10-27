package com.ssafy.greenEarth.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "children")
public class Child {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "child_id")
    private int id;

    private String realName;

    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private String nickname;

    private int mileage;

    private int clearedMission;

    private int earthLevel;

    @Enumerated(EnumType.STRING)
    private Role role;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private Parent parent;

    private String refreshToken;

    @OneToMany(mappedBy = "child", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private List<MissionLog> missionLogList = new ArrayList<>();

    @OneToMany(mappedBy = "child", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private List<Reward> rewardList = new ArrayList<>();

    @Builder
    public Child(String realName, String email, String password, Gender gender, String nickname, int mileage, int clearedMission, int earthLevel, Role role, Parent parent) {
        this.realName = realName;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.nickname = nickname;
        this.mileage = mileage;
        this.clearedMission = clearedMission;
        this.earthLevel = earthLevel;
        this.role = role;
        this.parent = parent;
    }

    public void setClearedMission(int clearedMission) {
        this.clearedMission = clearedMission;
    }
}
