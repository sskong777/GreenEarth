import ReactPlayer from "react-player";

const KidsSong = ({ songValue }) => {
  return (
    <div className="KidsSong">
      <ReactPlayer
        className="player"
        url={songValue.url}
        controls={false}
        playing={true}
        width="900px"
        height="506px"
      />
    </div>
  );
};

export default KidsSong;
