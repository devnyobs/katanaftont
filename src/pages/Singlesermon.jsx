import "../main.css";
import Videoplayer from "../components/Videoplayer";

function Singlesermon() {
  return (
    <>
      <div className="watch gridbox">
        <div className="container">
          <div className="videobox">
            <Videoplayer />
          </div>
          <div className="sermonsingletitle">consectetur adipisicing elit</div>
          <div className="sermonsingledescription">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            quasi dolorem molestias dolores, iste dignissimos eveniet modi
            possimus est tenetur? Deleniti ipsa quo facilis. Voluptatem alias
            nemo et expedita sapiente.
          </div>
        </div>
      </div>
    </>
  );
}

export default Singlesermon;
