import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const MemberInfoState = atom({
  key: "MemberInfoState",
  default: {
    parentId: 2,
    email: "tjrgus@kakao.com",
    nickName: "tjrgus",
    children: [
      {
        childId: 1,
        id: "tjrgus",
        real_name: "홍석현",
        gender: "남",
        nickname: "tjrgus",
        mileage: "0",
        cleared_mission: "0",
        earth_level: "1",
        birthday: "2020-10-02",
        avatar: 1,
      },
      {
        childId: 3,
        id: "tjrgus",
        real_name: "홍석현",
        gender: "남",
        nickname: "tjrgus",
        mileage: "0",
        cleared_mission: "0",
        earth_level: "1",
        birthday: "2020-10-02",
        avatar: 1,
      },
      {
        childId: 6,
        id: "tjrgus",
        real_name: "홍석현",
        gender: "남",
        nickname: "tjrgus",
        mileage: "0",
        cleared_mission: "0",
        earth_level: "1",
        birthday: "2020-10-02",
        avatar: 1,
      },
    ],
  },
  effects_UNSTABLE: [persistAtom],
});

export const ChildInfoState = atom({
  key: "ChildInfoState",
  default: {
    childId: 2,
    email: "tjrgus@naver.com",
    realName: "홍석현",
    gender: "남",
    nickName: "석현짱",
    mileage: "120",
    clearedMission: "12",
    earthLevel: "3",
    parent: "정종일",
  },
  effects_UNSTABLE: [persistAtom],
});

export const missionListState = atom({
  key: "missionListState",
  default: [
    {
      logId: 1,
      clearedAt: null,
      isPermitted: false,
      createdAt: "2022-10-30T11:10:07",
      parentNickname: "정종일",
      mission: {
        missionId: 1,
        name: "음식 남기지 않기",
        description: "미션 설명",
        mileage: 10,
      },
      childId: 1,
    },
    {
      logId: 2,
      clearedAt: null,
      isPermitted: false,
      createdAt: "2022-10-27T11:10:07",
      parentNickname: "정종일",
      mission: {
        missionId: 2,
        name: "텀블러 사용하기",
        description: "미션 설명",
        mileage: 5,
      },
      childId: 1,
    },
    {
      logId: 3,
      clearedAt: "2022-03-13 13:33",
      isPermitted: true,
      createdAt: "2022-10-30T13:10:07",
      parentNickname: "정종일",
      mission: {
        missionId: 3,
        name: "양치컵 사용하기",
        description: "미션 설명",
        mileage: 5,
      },
      childId: 1,
    },
    {
      logId: 4,
      clearedAt: "2022-03-13 13:33",
      isPermitted: true,
      createdAt: "2022-10-30T18:10:07",
      parentNickname: "정종일",
      mission: {
        missionId: 3,
        name: "양치컵 사용하기2",
        description: "미션 설명",
        mileage: 5,
      },
      childId: 1,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const missionItemState = atom({
  key: "missionItemState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const todayMissionListState = atom({
  key: "todayMissionListState",
  default: [
    {
      logId: 1,
      clearedAt: "2022-03-13 13:33",
      isPermitted: false,
      createdAt: "2022-09-26T11:10:07",
      parentNickname: "정종일",
      mission: {
        missionId: 1,
        name: "음식 남기지 않기",
        description: "미션 설명",
        mileage: 10,
      },
      childId: 1,
    },
    {
      logId: 2,
      clearedAt: null,
      isPermitted: false,
      createdAt: "2022-09-26T11:10:07",
      parentNickname: "정종일",
      mission: {
        missionId: 2,
        name: "텀블러 사용하기",
        description: "미션 설명",
        mileage: 5,
      },
      childId: 1,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
