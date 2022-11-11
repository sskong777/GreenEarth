import "animate.css";

const BadgeItem = ({ level, isLock, title }) => {
  return (
    <div className="BadgeItem">
      {/* 배지를 획득하였을 경우 */}
      {!isLock && (
        <div className="BadgeItemImage animate__animated animate__tada">
          <img
            className="w-[6rem]"
            src={`./../assets/badges/level${level}.png`}
          />
        </div>
      )}

      {/* 배지를 획득하지 못하였을 경우 */}
      {isLock && (
        <div className="BadgeItemImageLock">
          <img className="w-[5rem]" src="./../assets/badges/lock.svg" />
        </div>
      )}
      <div className="BadgeItemTitle">{title}</div>
    </div>
  );
};

export default BadgeItem;
