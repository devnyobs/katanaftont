import Imge2 from "../assets/img2.jpg";

function Singleevent() {
  return (
    <>
      <div className="watch gridbox">
        <img src={Imge2} className="singmeimgevent" alt="the image event" />
        <div className="scontainerevent">
          <h2 className="seventtitle">Dis le à jesus</h2>
          <h4 className="seventsubt">Le 25 janvier 2024 à 15:30</h4>
          <p className="seventcont">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            quasi dolorem molestias dolores, iste dignissimos eveniet modi
            possimus est tenetur? Deleniti ipsa quo facilis. Voluptatem alias
            nemo et expedita sapiente.
          </p>
        </div>
      </div>
    </>
  );
}

export default Singleevent;
