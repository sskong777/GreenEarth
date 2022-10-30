import { useState } from "react";
import BadgeItem from "./BadgeItem";

const dummyBadge = [
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

  const unlockBadge = dummyBadge.slice(0, childLevel);
  const lockBadge = dummyBadge.slice(childLevel, 10);

  console.log(unlockBadge);
  console.log(lockBadge);

  return (
    <div className="BadgeList">
      <BadgeItem />
      <BadgeItem />
      <BadgeItem />
      <BadgeItem />
      <BadgeItem />
      <BadgeItem />
      <BadgeItem />
      <BadgeItem />
      <BadgeItem />
      <BadgeItem />
    </div>
  );
};

export default BadgeList;
