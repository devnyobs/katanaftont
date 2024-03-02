import '../main.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Logos({data}) {
  return (
    <div className="logocontainerhome">
      <div className="logosimghome">
        <FontAwesomeIcon icon={data && data.icon} size='4x' />
      </div>
      <h4 className="textlogohome">{ data && data.title}</h4>
    </div>
  );
}

export default Logos;
