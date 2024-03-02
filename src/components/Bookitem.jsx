function Bookitem({ data }) {


  const handleDounload = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="itemcontainer">
      <p>
        <img
          src={data && data.image}
          className="presimg"
          alt="the single item image"
        />
      </p>
      <h3 className="itemtitle"> {data && data.title}</h3>
      <button
        onClick={() => {
          handleDounload(data && data.fileUrl);
        }}
        className="footerbtn"
      >
        DOUNLOAD
      </button>
    </div>
  );
}

export default Bookitem;
