import { sliderImgs } from "../../mooks/slider-mook"

const SlaiderlHome = () => {
  return (
    <section>
      <div className="slider-frame">
        <ul>
          {sliderImgs.map((slider) => {
            return (
              <li key={slider.id}><img src={slider.img} alt={slider.id} name={slider.id} /></li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default SlaiderlHome
