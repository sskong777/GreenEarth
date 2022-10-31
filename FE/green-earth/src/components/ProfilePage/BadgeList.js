import { useState } from "react";
import BadgeItem from "./BadgeItem";

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

const BadgeList = () => {
  const [childLevel, setChildLevel] = useState(6);

  const unlockBadge = badgeInfo.slice(0, childLevel);
  const lockBadge = badgeInfo.slice(childLevel, 10);

  return (
    <div className="BadgeList">
      {unlockBadge.map((badge, idx) => (
        <BadgeItem
          key={idx}
          isLock={false}
          level={badge.level}
          title={badge.title}
        />
      ))}
      {lockBadge.map((badge, idx) => (
        <BadgeItem
          key={idx}
          isLock={true}
          level={badge.level}
          title={badge.title}
        />
      ))}
    </div>
  );
};

export default BadgeList;
