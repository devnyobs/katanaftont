import "../main.css";

import Image2 from "../assets/img2.jpg";
import Image3 from "../assets/img3.jpg";
import Bookitem from "../components/Bookitem";

const DOUCEUR_URL = 'http://localhost:5173/douceur.pdf'
const FLORETTA_URL = 'http://localhost:5173/floretta.pdf'

const Databook = [
  {
    id: 1,
    title: "Holly bible1 floretta",
    image: Image2,
    fileUrl: FLORETTA_URL,
  },
  {
    id: 2,
    title: "Holly bible2 douceur",
    image: Image3,
    fileUrl: DOUCEUR_URL,
  },
];

function Book() {
  return (
    <>
      <div className="book gridbox">
        {Databook.map((item) => (
          <Bookitem key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default Book;
