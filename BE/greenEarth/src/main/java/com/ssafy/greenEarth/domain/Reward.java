package com.ssafy.greenEarth.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "rewards")
public class Reward {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reward_id")
    private int id;

    @Column(length = 128)
    private String name;

    private int rewardCondition;

    @Column(length = 25)
    private String parentNickname;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "child_id")
    private Child child;

    public Reward(int id, String name, int rewardCondition, String parentNickname, Child child) {
        this.id = id;
        this.name = name;
        this.rewardCondition = rewardCondition;
        this.parentNickname = parentNickname;
        this.child = child;
    }
}
