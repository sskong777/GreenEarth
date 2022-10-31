import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const jwtTokenState = atom({
  key: "jwtTokenState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
