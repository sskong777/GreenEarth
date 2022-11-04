import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// 테스트용 임시 로그인 토큰
export const logInTokenState = atom({
  key: "logInTokenState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const memberInfoState = atom({
  key: "memberInfoState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const childInfoState = atom({
  key: "childInfoState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const missionListState = atom({
  key: "missionListState",
  default: [
    {
      logId: 1,
      clearedAt: null,
      isPermitted: false,
      createdAt: "2022-11-01T11:10:07",
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
      createdAt: "2022-11-01T11:10:09",
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
      createdAt: "2022-11-01T13:10:07",
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

export const missionOptionListState = atom({
  key: "missionOptionListState",
  default: [
    {
      missionId: 1,
      name: "분리수거 하기",
      description: "미션 설명",
      mileage: 10,
    },
    {
      missionId: 2,
      name: "텀블러 사용하기",
      description: "미션 설명",
      mileage: 10,
    },
    {
      missionId: 3,
      name: "음식 남기지 않기",
      description: "미션 설명",
      mileage: 10,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const missionSelectState = atom({
  key: "missionSelectState",
  default: "",
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

export const rewardListState = atom({
  key: "rewardListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
