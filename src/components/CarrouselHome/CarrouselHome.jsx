import { sliderImgs } from "../../mooks/slider-mook"

const CarrouselHome = () => {
  return (
    <section>
      <div className="slider-frame">
        <ul>
          {sliderImgs.map((img) => {
            return (
              <li key={img}><img src={img} /></li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default CarrouselHome
