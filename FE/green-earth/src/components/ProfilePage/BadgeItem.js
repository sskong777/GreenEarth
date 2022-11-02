import "animate.css";

const BadgeItem = ({ isLock, level, title }) => {
  return (
    <div className="BadgeItem">
      {!isLock && (
        <div className="BadgeItemImage animate__animated animate__tada">
          <img src="./../assets/images/badge1.svg" />
        </div>
      )}
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
