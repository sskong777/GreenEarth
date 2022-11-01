const MissionItem = (data) => {
  if (new Date(data.createdAt) == new Date()) {
    console.log("최고");
  }
  return (
    <>
      {data.clearedAt === null ? (
        <div className="MissionItem">
          <div>{data.mission.name}</div>
          <div>😥 미션 미완료</div>
        </div>
      ) : (
        <div className="MissionItemComplete">
          <div>{data.mission.name}</div>
          <div>😊 {data.clearedAt} 완료</div>
        </div>
      )}
    </>
  );
};

export default MissionItem;
