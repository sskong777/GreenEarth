const MissionItem = (data) => {
  return (
    <>
      {data.clearedAt === null ? (
        <div className="MissionItem">
          <div>{data.mission.name}</div>
          <div>미션 실패</div>
        </div>
      ) : (
        <div className="MissionItemComplete">
          <div>{data.mission.name}</div>
          <div>{data.clearedAt}</div>
        </div>
      )}
    </>
  );
};

export default MissionItem;
