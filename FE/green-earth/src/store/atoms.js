import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

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
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const missionOptionListState = atom({
  key: "missionOptionListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const missionSelectState = atom({
  key: "missionSelectState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const todayMissionListState = atom({
  key: "todayMissionListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const rewardListState = atom({
  key: "rewardListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const missionInfoState = atom({
  key: "missionInfoState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
export const logInTokenState = atom({
  key: "logInTokenState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

