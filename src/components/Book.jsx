import Toastification from "../helpers/Toastification";
import { Eventvalidation } from "../helpers/Validator";
import Textarea from "./Textarea";
import Textfield from "./Textfield";

import { useState, useRef } from "react";

function Book() {
  const [title, setTitlemsg] = useState("");
  const [subtitle, setSubtitlemsg] = useState("");
  const [content, setContentmsg] = useState("");
  const [showNot, setshowNot] = useState(false);
  const [Fileuploaded, setFileuploaded] = useState({});
  const [Bookuploaded, setBookuploaded] = useState({});
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
  };
  const uploadBook = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setBookuploaded(file);
  };

  const handleSubmitbtn = (e) => {
    e.preventDefault();
    const validdata = Eventvalidation.validate({
      title,
      subtitle,
      content,
    });

    if (validdata) {
      Shownotification();
    }

    setTitlemsg("");
    setSubtitlemsg("");
    setContentmsg("");
  };
  return (
    <>
      <div className="messagecontainer">
        {showNot && <Toastification />}
        <h2>Book Management</h2>
        <form>
          <div className="inputimage">
            <p>Upload your Image</p>
            <input
              type="file"
              ref={fileInputRef}
              name="file"
              className="file-input"
              onChange={uploadFile}
            />
          </div>
          <div className="inputimage">
            <p>Upload your book</p>
            <input
              type="file"
              ref={fileInputRef}
              name="file"
              className="file-input"
              onChange={uploadBook}
            />
          </div>
          <Textfield
            typetext="text"
            title="Book Title"
            Valid={title}
            onValidate={setTitlemsg}
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

export default Book;
