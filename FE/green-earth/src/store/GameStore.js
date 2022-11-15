import { atom } from "recoil";

export const RecycleItemState = atom({
  key: "RecycleItemState",
  default: [
    {
      name: "파스퇴르",
      current: [0, 0], //현재좌표
      loc1: [51, 42], //좌측 상단 모서리 좌표
      loc2: [118, 228], //우측 하단 모서리 좌표
      answer: 0,
      success: false,
    },
    {
      name: "아이시스",
      current: [0, 0], //현재좌표
      loc1: [155, 85], //좌측 상단 모서리 좌표
      loc2: [203, 234], //우측 하단 모서리 좌표
      answer: 0,
      success: false,
    },
    {
      name: "떡볶이",
      current: [0, 0], //현재좌표
      loc1: [240, 113], //좌측 상단 모서리 좌표
      loc2: [391, 228], //우측 하단 모서리 좌표
      answer: 1,
      success: false,
    },
    {
      name: "자일리톨",
      current: [0, 0], //현재좌표
      loc1: [424, 25], //좌측 상단 모서리 좌표
      loc2: [502, 133], //우측 하단 모서리 좌표
      answer: 0,
      success: false,
    },
    {
      name: "자껍",
      current: [0, 0], //현재좌표
      loc1: [526, 47], //좌측 상단 모서리 좌표
      loc2: [634, 128], //우측 하단 모서리 좌표
      answer: 0,
      success: false,
    },
    {
      name: "알약",
      current: [0, 0], //현재좌표
      loc1: [484, 167], //좌측 상단 모서리 좌표
      loc2: [621, 254], //우측 하단 모서리 좌표
      answer: 1,
      success: false,
    },
    {
      name: "좋은 물",
      current: [0, 0], //현재좌표
      loc1: [671, 65], //좌측 상단 모서리 좌표
      loc2: [751, 233], //우측 하단 모서리 좌표
      answer: 1,
      success: false,
    },
  ],
  effects_UNSTABLE: [],
});
