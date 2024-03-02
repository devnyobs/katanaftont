import Textfield from "../components/Textfield";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Loginvalidation } from "../helpers/Validator";
import { ValidationError } from "yup";

function Login() {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSublit = async (e) => {
    e.preventDefault();

    const defaultValue = {
      email: "gouliben@gmail.com",
      password: "Gouliben@",
    };

    const errors = await Loginvalidation.validate({
      email: Email,
      password: Password,
    });
    if (
      errors &&
      Email === defaultValue.email &&
      Password === defaultValue.password
    ) {
      navigate("/admin");
    } else {
      console.log("Your data is not valid JUST FOR ADMIN PLEASE");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="watch gridbox">
        <div className="sermoncontainer">
          <h1 className="itemtitle">login</h1>
          <div className="boxcontent">
            <form>
              <Textfield
                typetext="email"
                title="Email"
                Valid={Email}
                onValidate={setEmail}
              />
              <Textfield
                typetext="password"
                title="Password"
                Valid={Password}
                onValidate={setPassword}
              />
              <p className="msglogin">only for admin please</p>
              <div className="btnsubmitbox">
                <button
                  type="submit"
                  className="submitbtn"
                  onClick={handleSublit}
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

export default Login;
