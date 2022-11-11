const MissionItem = (data) => {
  return (
    <>
      {/* 만약 clearedAt이 널이면 미션 미완료 출력 */}
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
