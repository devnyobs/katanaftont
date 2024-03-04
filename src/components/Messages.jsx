import Toastification from "../helpers/Toastification";
import { Messagevalidation } from "../helpers/Validator";
import Textarea from "./Textarea";
import Textfield from "./Textfield";

import { useState } from "react";

function Messages() {
  const [titlemsg, setTitlemsg] = useState("");
  const [subtitlemsg, setSubtitlemsg] = useState("");
  const [contentmsg, setContentmsg] = useState("");
  const [showNot, setshowNot] = useState(false);

  function Shownotification() {
    setshowNot(true);
    setTimeout(() => {
      setshowNot(false);
    }, 2000);
  }

  const handleSubmitbtn = (e) => {
    e.preventDefault();
    const validdata = Messagevalidation.validate({
      titlemsg,
      subtitlemsg,
      contentmsg,
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
        <h2>Messages about church life</h2>
        <form>
          <Textfield
            typetext="text"
            title="Title"
            Valid={titlemsg}
            onValidate={setTitlemsg}
          />
          <Textarea
            title="Subtitle"
            Value={subtitlemsg}
            onValidate={setSubtitlemsg}
          />
          <Textarea
            title="Content"
            Value={contentmsg}
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

export default Messages;
