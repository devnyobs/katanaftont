import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import "../main.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarDays,
  faTv,
  faBookBible,
  faHandsPraying,
  faAddressCard,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClickIcon = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      <nav className="thenav">
        <div to="/" className="logo">
          LOG
        </div>
        <div className={show ? "navigator mobilmenu" : "navigator"}>
          <ul>
            <li className="" onClick={handleClickIcon}>
              <NavLink to="/" className="linkpages">
                <FontAwesomeIcon icon={faHome} style={{ marginRight: "4px" }} />
                Home
              </NavLink>
            </li>
            <li onClick={handleClickIcon}>
              <NavLink to="/event" className="linkpages">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  style={{ marginRight: "4px" }}
                />
                Event
              </NavLink>
            </li>
            <li onClick={handleClickIcon}>
              <NavLink to="/watch" className="linkpages">
                <FontAwesomeIcon icon={faTv} style={{ marginRight: "4px" }} />
                Watch
              </NavLink>
            </li>
            <li onClick={handleClickIcon}>
              <NavLink to="/book" className="linkpages">
                <FontAwesomeIcon
                  icon={faBookBible}
                  style={{ marginRight: "4px" }}
                />
                Books
              </NavLink>
            </li>
            <li onClick={handleClickIcon}>
              <NavLink to="/prayer" className="linkpages">
                <FontAwesomeIcon
                  icon={faHandsPraying}
                  style={{ marginRight: "4px" }}
                />
                Prayer
              </NavLink>
            </li>
            <li onClick={handleClickIcon}>
              <NavLink to="/contact" className="linkpages">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  style={{ marginRight: "4px" }}
                />
                Contact
              </NavLink>
            </li>
            <li onClick={handleClickIcon}>
              <NavLink to="/login" className="linkpages">
                <FontAwesomeIcon icon={faUser} style={{ marginRight: "4px" }} />
                Log In
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="icon" onClick={handleClickIcon}>
          <FontAwesomeIcon icon={faBars} style={{ marginRight: "4px" }} />
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
