package com.ssafy.greenEarth.repository;

import com.ssafy.greenEarth.domain.Child;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChildRepository extends JpaRepository<Child, Integer> {

    Child findById(int id);

}
