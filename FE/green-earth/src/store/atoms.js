import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

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
