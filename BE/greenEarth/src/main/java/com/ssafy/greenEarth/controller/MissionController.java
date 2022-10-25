package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.dto.ResponseDto;
import com.ssafy.greenEarth.exception.CustomErrorException;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.MissionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("mission")
public class MissionController {

    ChildRepository childRepository;
    MissionRepository mIssionRepository;

    @PostMapping("/child/{child_id}")
    public ResponseDto todayMissionCreate(@PathVariable("child_id") int child_id) {
        Child child = childRepository.findById(child_id).orElseThrow(
                () -> new CustomErrorException("아이가 존재하지 않습니다")
        );

        return new ResponseDto();
//        User user = userRepository.findById(user_id).orElseThrow(
//                () -> new CustomErrorException("유저가 존재하지 않습니다")
//        );
//        Badge badge = badgeRepository.findById(badge_id).orElseThrow(
//                () -> new CustomErrorException("뱃지가 존재하지 않습니다")
//        );
//
//        Badge data = badgeService.addBadgeToUser(user, badge);
//
//        System.out.println(data);
//        System.out.println("---------------------------------");
////        System.out.println(user.getBadges());
//        return new ResponseDto(200L,"추가된 뱃지", data);
    }


}
