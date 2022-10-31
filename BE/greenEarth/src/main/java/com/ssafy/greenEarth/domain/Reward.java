package com.ssafy.greenEarth.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "rewards")
public class Reward {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reward_id")
    private int id;

    private String name;

    private int rewardCondition;

    private String parentNickname;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "child_id")
    private Child child;

    private boolean is_paid;


    public Reward(int id, String name, int rewardCondition, String parentNickname, Child child) {
        this.id = id;
        this.name = name;
        this.rewardCondition = rewardCondition;
        this.parentNickname = parentNickname;
        this.child = child;
    }
}
