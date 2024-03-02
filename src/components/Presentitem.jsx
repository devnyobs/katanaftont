import "../main.css";
import { useNavigate } from "react-router-dom";

function Presentitem({ data }) {
  const navigate = useNavigate();
  return (
    <div
      className="itemcontainer"
      onClick={() => {
        navigate(`/${data.id}`);
      }}
    >
      <h3 className="itemtitle"> {data && data.title}</h3>
      <h4 className="itemsubtitle">{data && data.subtitle}</h4>
      <p className="itemparag">{data && data.content}</p>
      <p className="footeritem">writted by KATANA</p>
    </div>
  );
}

export default Presentitem;
