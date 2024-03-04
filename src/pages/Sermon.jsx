import { useState } from "react";
import Textarea from "../components/Textarea";
import Textfield from "../components/Textfield";
import { Prayervalidation } from "../helpers/Validator";

function Sermon() {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [prayer, setPrayer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validdata = await Prayervalidation.validate({
      name,
      adress,
      email,
      phone,
      prayer,
    });

    if (validdata) {
      console.log({ message: "your prayers are sended", data: validdata });
    } else {
      console.log("your data is not valid");
    }

    setName("");
    setAdress("");
    setEmail("");
    setPhone("");
    setPrayer("");
  };

  return (
    <>
      <div className="watch gridbox">
        <div className="sermoncontainer">
          <h1 className="itemtitle">Prayer Request</h1>
          <div className="boxcontent">
            <form action="">
              <Textfield
                typetext="text"
                title="Your Name"
                Valid={name}
                onValidate={setName}
              />
              <Textfield
                typetext="text"
                title="Adress"
                Valid={adress}
                onValidate={setAdress}
              />
              <Textfield
                typetext="email"
                Valid={email}
                onValidate={setEmail}
                title="Your Email"
              />
              <Textfield
                typetext="number"
                title="Your phone"
                Valid={phone}
                onValidate={setPhone}
              />
              <Textarea
                name="plaintext"
                title="Prayer topics"
                Value={prayer}
                onValidate={setPrayer}
              />
              <div className="btnsubmitbox">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="submitbtn"
                >
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
