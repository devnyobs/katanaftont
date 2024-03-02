import { useNavigate } from "react-router-dom";
import Videoimg from "../assets/bible.jpg";


function Presvid() {

  const navigate = useNavigate();
  return (
    <>
      <div className="itemcontainer" onClick={()=>{navigate('/2')}} >
        <p>
          <img src={Videoimg} className="presimg" alt="the video" />
        </p>
        <h3 className="itemtitle">THE TITLE</h3>
        <h4 className="itemsubtitle">
          ipsum dolor sit amet, consectetur adipisicing
        </h4>
      </div>
    </>
  );
}

export default Presvid;
