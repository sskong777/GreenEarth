package com.ssafy.greenEarth.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
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

    private LocalDate birthday;

    private int avatar;

    @Enumerated(EnumType.STRING)
    private Role role;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private Parent parent;

    @OneToMany(mappedBy = "child", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private final List<MissionLog> missionLogList = new ArrayList<>();

    @OneToMany(mappedBy = "child", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private final List<Reward> rewardList = new ArrayList<>();

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public void setParent(Parent parent) {
        this.parent = parent;
    }

    public void setClearedMission(int clearedMission) {
        this.clearedMission = clearedMission;
    }

    public void setMileage(int mileage) {
        this.mileage = mileage;
    }

    public void setEarthLevel(int earthLevel) { this.earthLevel = earthLevel;}

    @Builder
    public Child(String realName, String email, String password, Gender gender, String nickname,
                 int mileage, int clearedMission, int earthLevel, LocalDate birthday, int avatar,
                 Role role, Parent parent) {
        this.realName = realName;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.nickname = nickname;
        this.mileage = mileage;
        this.clearedMission = clearedMission;
        this.earthLevel = earthLevel;
        this.birthday = birthday;
        this.avatar = avatar;
        this.role = role;
        this.parent = parent;
    }
}
