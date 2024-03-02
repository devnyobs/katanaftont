import { Fragment } from "react";
import "../main.css";
import ImgHead from "../assets/bible.jpg";
import Presentitem from "../components/Presentitem";
import Presvid from "../components/Presvid";
import Logos from "../components/Logos";
import {
  faGlobe,
  faHandHoldingHeart,
  faHandsHoldingChild,
  faChurch,
} from "@fortawesome/free-solid-svg-icons";


const Datamessage = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi dolorem molestias dolores, iste dignissimos eveniet modi possimus est tenetur? Deleniti ipsa quo facilis. Voluptatem alias nemo et expedita sapiente.",
  },
  {
    id: 2,
    title: "consectetur adipisicing elit",
    subtitle:
      "iste dignissimos eveniet modi possimus est tenetur? Deleniti ipsa quo facilis",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi dolorem molestias dolores, iste dignissimos eveniet modi possimus est tenetur? Deleniti ipsa quo facilis. Voluptatem alias nemo et expedita sapiente.",
  },
  {
    id: 3,
    title: "possimus est tenetur? Deleniti ipsa quo facilis",
    subtitle:
      "iste dignissimos eveniet modi possimus est tenetur? Deleniti ipsa quo facilis",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi dolorem molestias dolores, iste dignissimos eveniet modi possimus est tenetur? Deleniti ipsa quo facilis. Voluptatem alias nemo et expedita sapiente.",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi dolorem molestias dolores, iste dignissimos eveniet modi possimus est tenetur? Deleniti ipsa quo facilis. Voluptatem alias nemo et expedita sapiente.",
  },
  {
    id: 5,
    title: "consectetur adipisicing elit",
    subtitle:
      "iste dignissimos eveniet modi possimus est tenetur? Deleniti ipsa quo facilis",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi dolorem molestias dolores, iste dignissimos eveniet modi possimus est tenetur? Deleniti ipsa quo facilis. Voluptatem alias nemo et expedita sapiente.",
  },
];

const Datalogos = [
  {
    id: 1,
    icon: faGlobe,
    title: "A world of christ",
  },
  {
    id: 2,
    icon: faHandHoldingHeart,
    title: "care ministries",
  },
  {
    id: 3,
    icon: faHandsHoldingChild,
    title: "United as one",
  },
  {
    id: 4,
    icon: faChurch,
    title: "Spreading the Gospel",
  },
];

function Home() {

  return (
    <Fragment>
      <header className="thehaider">
        <h1 className="thehometitle">welcome to catanaworld</h1>
        <img src={ImgHead} alt="la bible" className="headerimg" />
      </header>
      <div className="container">
        <div className="textonly">
          <h3 className="separateur">Messages</h3>
          <div className="gridbox">
            {Datamessage.map((single) => (
              <Presentitem key={single.id} data={single} />
            ))}
          </div>
        </div>
        <div className="videos">
          <h3 className="separateur">videos presentation</h3>
          <div className="gridbox">
            <Presvid />
            <Presvid />
            <Presvid />
            <Presvid />
          </div>
        </div>
        <div className="logos">
          <h3 className="separateur">Differents Activities</h3>
          <div className="gridbox">
            {Datalogos.map((logo) => (
              <Logos key={logo.id} data={logo} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
