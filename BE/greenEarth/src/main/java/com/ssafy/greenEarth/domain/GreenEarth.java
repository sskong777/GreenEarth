package com.ssafy.greenEarth.domain;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "green_earth")
public class GreenEarth {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "green_earth_id")
    private int id;

    private int mileage_condition;
}
