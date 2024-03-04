import Toastification from "../helpers/Toastification";
import { Videovalidation } from "../helpers/Validator";
import Textarea from "./Textarea";
import Textfield from "./Textfield";

import { useState, useRef } from "react";

function Videopres() {
  const [showNot, setshowNot] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [videourl, setVideourl] = useState("");

  function Shownotification() {
    setshowNot(true);
    setTimeout(() => {
      setshowNot(false);
    }, 2000);
  }

  const [Fileuploaded, setFileuploaded] = useState({});
  const fileInputRef = useRef(null);

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileuploaded(file);
    const formData = new FormData();
    formData.append("file", file);
  };

  const handleSubmitbtn = (e) => {
    e.preventDefault();
    const validdata = Videovalidation.validate({
      title,
      subtitle,
      videourl,
    });

    if (validdata) {
      Shownotification();
    }

    setTitle("");
    setSubtitle("");
    setVideourl("");
  };

  return (
    <>
      <div className="messagecontainer">
        {showNot && <Toastification />}
        <h2>Videos about church life</h2>

        <form>
          <p>Upload your Image</p>
          <input
            type="file"
            ref={fileInputRef}
            name="file"
            className="file-input"
            onChange={uploadFile}
          />
          <Textfield
            typetext="text"
            title="Title"
            Valid={title}
            onValidate={setTitle}
          />
          <Textfield
            title="Video URL"
            Valid={videourl}
            onValidate={setVideourl}
          />
          <Textarea title="Content" Value={subtitle} onValidate={setSubtitle} />
          <div className="btnsubmitbox">
            <button onClick={handleSubmitbtn} className="submitbtn">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Videopres;
