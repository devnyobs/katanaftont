import { useState } from "react";
import "../main.css";
import Messages from "../components/Messages";
import Videopres from "../components/Videopres";
import Events from "../components/Events";
import Watch from "../components/Watch";
import Book from "../components/Book";
import Prayers from "../components/Prayers";

const Boxdata = [
  {
    id: 1,
    title: "Messages",
  },
  {
    id: 2,
    title: "Videos presentations",
  },
  {
    id: 3,
    title: "Events",
  },
  {
    id: 4,
    title: "Watch",
  },
  {
    id: 5,
    title: "Books",
  },
  {
    id: 6,
    title: "Prayers",
  },
];

function Admin() {
  const [Navig, setNavig] = useState(1);
  return (
    <>
      <div className="adminhome">
        <div className="sidebar">
          <ul>
            {Boxdata.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setNavig(item.id);
                }}
                className={
                  Navig === item.id ? "sidebaritemfocus" : "sidebaritem"
                }
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="admincontent">
          {Navig === 1 && <Messages />}
          {Navig === 2 && <Videopres />}
          {Navig === 3 && <Events />}
          {Navig === 4 && <Watch />}
          {Navig === 5 && <Book />}
          {Navig === 6 && <Prayers />}
        </div>
      </div>
    </>
  );
}

export default Admin;
