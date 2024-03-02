import Videoimg from "../assets/bible.jpg";
import { useNavigate } from "react-router-dom";

import "../main.css";
function Eventitem() {
  const navigate = useNavigate();
  return (
    <>
      <div className="itemcontainer" onClick={()=>{navigate(`/event/3`)}} >
        <h3 className="itemtitle">Dis le à jesus</h3>
        <h4 className="itemsubtitle">Le 25 janvier 2024 à 15:30</h4>
        <p>
          <img src={Videoimg} className="presimg" alt="the video" />
        </p>
        <p className="itemparag">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi
          dolorem molestias dolores, iste dignissimos eveniet modi possimus est
          tenetur? Deleniti ipsa quo facilis. Voluptatem alias nemo et expedita
          sapiente.
        </p>
        <p className="footeritem">writted by KATANA</p>
      </div>
    </>
  );
}

export default Eventitem;
