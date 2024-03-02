import { useNavigate } from "react-router-dom";
import "../main.css";

function Watchitem({ data }) {
  const navigate = useNavigate();

  return (
    <div
      className="itemcontainer"
      onClick={() => {
        navigate(`/watch/${data.id}`);
      }}
    >
      <h3 className="itemtitle"> {data && data.title}</h3>
      <h4 className="itemsubtitle">{data && data.description}</h4>
      <p>
        <img
          src={data && data.image}
          className="presimg"
          alt="the single item image"
        />
      </p>
      <p className="itemparag">{data && data.content}</p>
      <p className="footeritem">writted by KATANA</p>
    </div>
  );
}

export default Watchitem;
