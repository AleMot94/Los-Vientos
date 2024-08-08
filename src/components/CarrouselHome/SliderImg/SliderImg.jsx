import { sliderImgs } from "../../../mooks/slider-mook"

function SliderImg() {
  return (
    <div>
      <ul>
        {sliderImgs.map((img) => {
          return (
            <li key={img}><img src={img} /></li>
          )
        })}
      </ul>
    </div>
  )
}

export default SliderImg
