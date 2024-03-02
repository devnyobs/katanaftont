import ReactPlayer from "react-player";
import Video from "../videos/onlyyoujesus.mp4";

function Videoplayer({ URL }) {
  console.log(URL);

  return (
    <div>
      <ReactPlayer
        light={true}
        style={{padding:"5px", border:"1px solid #332f2f"}}
        controls={true}
        url={URL !== undefined || "" ? URL : Video}
      />
    </div>
  );
}

export default Videoplayer;
