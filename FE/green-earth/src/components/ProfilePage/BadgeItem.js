const BadgeItem = ({ isLock, level, title }) => {
  return (
    <div className="BadgeItem">
      {!isLock && (
        <div className="BadgeItemImage">
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
