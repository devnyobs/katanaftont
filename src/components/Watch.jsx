import Toastification from "../helpers/Toastification";
import { Watchvalidation } from "../helpers/Validator";
import Textarea from "./Textarea";
import Textfield from "./Textfield";

import { useState, useRef } from "react";

function Watch() {
  const [title, setTitlemsg] = useState("");
  const [videourl, setVideourl] = useState("");
  const [subtitle, setSubtitlemsg] = useState("");
  const [content, setContentmsg] = useState("");
  const [showNot, setshowNot] = useState(false);
  const [Fileuploaded, setFileuploaded] = useState({});
  const fileInputRef = useRef(null);

  function Shownotification() {
    setshowNot(true);
    setTimeout(() => {
      setshowNot(false);
    }, 2000);
  }

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileuploaded(file);
    const formData = new FormData();
    formData.append("file", file);
  };

  const handleSubmitbtn = (e) => {
    e.preventDefault();
    const validdata = Watchvalidation.validate({
      videourl,
      title,
      subtitle,
      content,
    });

    if (validdata) {
      Shownotification();
    }

    setVideourl("");
    setTitlemsg("");
    setSubtitlemsg("");
    setContentmsg("");
  };
  return (
    <>
      <div className="messagecontainer">
        {showNot && <Toastification />}
        <h2>Watch videos Management</h2>
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
            title="Video URL"
            Valid={videourl}
            onValidate={setVideourl}
          />
          <Textfield
            typetext="text"
            title="Title"
            Valid={title}
            onValidate={setTitlemsg}
          />
          <Textarea
            typetext="text"
            title="Subtitle"
            Value={subtitle}
            onValidate={setSubtitlemsg}
          />
          <Textarea
            title="Content"
            Value={content}
            onValidate={setContentmsg}
          />
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

export default Watch;
