import "../main.css";

function Presentitem({ data }) {
  return (
    <div className="itemcontainer">
      <h3 className="itemtitle"> {data && data.title}</h3>
      <h4 className="itemsubtitle">{data && data.subtitle}</h4>
      <p className="itemparag">{data && data.content}</p>
      <p className="footeritem">writted by KATANA</p>
    </div>
  );
}

export default Presentitem;
