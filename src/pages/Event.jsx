import { Fragment } from "react";

import Eventitem from "../components/Eventitem";

function Event() {
  return (
    <Fragment>
      <div className="event gridbox" >
        <Eventitem />
        <Eventitem />
        <Eventitem />
        <Eventitem />
        <Eventitem />
        <Eventitem />
      </div>
    </Fragment>
  );
}

export default Event;
