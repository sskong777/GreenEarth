import { useState } from "react";

import BadgeItem from "./BadgeItem";

// 배지 정보 리스트
const badgeInfo = [
  { level: 1, title: "새로운 시작" },
  { level: 2, title: "깨끗한 물" },
  { level: 3, title: "따뜻한 태양" },
  { level: 4, title: "푸른 나무" },
  { level: 5, title: "귀여운 토끼" },
  { level: 6, title: "온순한 사슴" },
  { level: 7, title: "올곧은 기린" },
  { level: 8, title: "든든한 사자" },
  { level: 9, title: "환경 지킴이" },
  { level: 10, title: "내가 Green 지구" },
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
        <BadgeItem
          key={idx}
          level={badge.level}
          isLock={false}
          title={badge.title}
        />
      ))}
      {/* 미획득한 배지리스트 반복문 */}
      {lockBadge.map((badge, idx) => (
        <BadgeItem
          key={idx}
          level={badge.level}
          isLock={true}
          title={badge.title}
        />
      ))}
    </div>
  );
};

export default BadgeList;
