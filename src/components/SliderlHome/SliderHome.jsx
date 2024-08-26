import { sliderImgs } from "../../mooks/slider-mook";

const SliderlHome = () => {
  return (
    <section className="container-slider">
      <div className="slider-frame">
        <ul>
          {sliderImgs.map((slider) => {
            return (
              <li key={slider.id}>
                <img src={slider.img} alt={slider.name + "foto"} name={slider.id} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SliderlHome;
