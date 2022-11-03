import { useState } from "react";

import BadgeItem from "./BadgeItem";

// 배지 정보 리스트
const badgeInfo = [
  { level: 1, title: "내가 제일 최고" },
  { level: 2, title: "내가 제일 최고" },
  { level: 3, title: "내가 제일 최고" },
  { level: 4, title: "내가 제일 최고" },
  { level: 5, title: "내가 제일 최고" },
  { level: 6, title: "내가 제일 최고" },
  { level: 7, title: "내가 제일 최고" },
  { level: 8, title: "내가 제일 최고" },
  { level: 9, title: "내가 제일 최고" },
  { level: 10, title: "내가 제일 최고" },
];

const BadgeList = ({ earthLevel }) => {
  const [childLevel, setChildLevel] = useState(earthLevel);

  // 레벨을 기준으로 획득 배지와 미획득 배지로 분류해서 저장
  const unlockBadge = badgeInfo.slice(0, childLevel);
  const lockBadge = badgeInfo.slice(childLevel, 10);

  return (
    <div className="BadgeList">
      {/* 획득한 배지리스트 반복문 */}
      {unlockBadge.map((badge, idx) => (
        <BadgeItem key={idx} isLock={false} title={badge.title} />
      ))}
      {/* 미획득한 배지리스트 반복문 */}
      {lockBadge.map((badge, idx) => (
        <BadgeItem key={idx} isLock={true} title={badge.title} />
      ))}
    </div>
  );
};

export default BadgeList;
