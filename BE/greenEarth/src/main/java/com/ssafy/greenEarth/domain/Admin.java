package com.ssafy.greenEarth.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "admin_id")
    private int id;

    @Column(length = 50)
    private String email;

    @Column(length = 50)
    private String password;

    @Column(length = 25)
    @Enumerated(EnumType.STRING)
    private Role role;

}
