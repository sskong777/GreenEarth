import "animate.css";

const BadgeItem = ({ isLock, title }) => {
  return (
    <div className="BadgeItem">
      {/* 배지를 획득하였을 경우 */}
      {!isLock && (
        <div className="BadgeItemImage animate__animated animate__tada">
          <img src="./../assets/images/badge1.svg" />
        </div>
      )}

      {/* 배지를 획득하지 못하였을 경우 */}
      {isLock && (
        <div className="BadgeItemImageLock">
          <img src="./../assets/images/lock.svg" />
        </div>
      )}
      <div className="BadgeItemTitle">{title}</div>
    </div>
  );
};

export default BadgeItem;
