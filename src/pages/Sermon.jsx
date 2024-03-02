import Textarea from "../components/Textarea";
import Textfield from "../components/Textfield";
Textarea;

function Sermon() {
  return (
    <>
      <div className="watch gridbox">
        <div className="sermoncontainer">
          <h1 className="itemtitle">Prayer Request</h1>
          <div className="boxcontent">
            <form action="">
              <Textfield typetext="text" title="Your Name" />
              <Textfield typetext="text" title="Adress" />
              <Textfield typetext="email" title="Your Email" />
              <Textfield typetext="number" title="Your phone" />
              <Textfield typetext="text" title="Prayer topics" />
              <Textarea name="plaintext" title="Prayer topics" />
              <div className="btnsubmitbox">
                <button type="button" className="submitbtn">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sermon;
