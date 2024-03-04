import "./toast.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function Toastification() {
  return (
    <>
      <div className="taostcontainer">
        <div className="notifications">
          <div className="toast success">
            <FontAwesomeIcon
              className="toasticon"
              icon={faCircleCheck}
              style={{ marginRight: "4px" }}
            />
            <div className="content">
              <div className="title">Success</div>
              <span>this is a success toast</span>
            </div>
            <FontAwesomeIcon
              className="toasticon"
              icon={faXmark}
              style={{ marginRight: "4px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Toastification;
