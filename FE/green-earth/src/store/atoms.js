import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const ChildrenInfoState = atom({
  key: "ChildrenInfoState",
  default: [],
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
    clearedMission: "0",
    earthLevel: "3",
    parent: "정종일",
  },
  effects_UNSTABLE: [persistAtom],
});

export const missionListState = atom({
  key: "missionListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const missionItemState = atom({
  key: "missionItemState",
  default: {},
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

