import "../main.css";
import Watchitem from "../components/WatchItem";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.jpg";

const Datawatch = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description: "Sermon about satanic hotels video",
    image: Img2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi dolorem molestias dolores tenetur? Deleniti ipsa quo facilis. Voluptatem alias nemo et expedita sapiente.",
  },
  {
    id: 2,
    title: "tenetur? Deleniti ipsa quo facilis",
    description: "Message video",
    image: Img3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi dolorem molestias dolores tenetur? Deleniti ipsa quo facilis.",
  },
  {
    id: 3,
    title:
      "consectetur adipisicing elit. Error quasi dolorem molestias dolores",
    description: "Sermon about satanic hotels video",
    image: Img4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi dolorem molestias dolores tenetur? Deleniti ipsa quo facilis. Voluptatem alias nemo et expedita sapiente.",
  },
  {
    id: 4,
    title: "tenetur? Deleniti ipsa quo facilis",
    description: "Message video",
    image: Img5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi dolorem molestias dolores tenetur? Deleniti ipsa quo facilis.",
  },
  {
    id: 5,
    title:
      "consectetur adipisicing elit. Error quasi dolorem molestias dolores",
    description: "Sermon about satanic hotels video",
    image: Img6,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi dolorem molestias dolores tenetur? Deleniti ipsa quo facilis. Voluptatem alias nemo et expedita sapiente.",
  },
];

function Watch() {
  return (
    <>
      <div className="watch gridbox">
        {Datawatch.map((item) => (
          <Watchitem key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default Watch;
