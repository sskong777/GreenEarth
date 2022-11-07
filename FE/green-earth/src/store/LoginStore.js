import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const refreshTokenState = atom({
  key: "refreshTokenState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const isRetryState = atom({
  key: "isRetryState",
  default: false,
  effects_UNSTABLE: [],
});
