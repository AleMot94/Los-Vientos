import { bedrooms } from "../../mooks/bedrooms-mook"
import { arrayAreaComun } from "../../mooks/area-comun-mock"
import { patioArray } from "../../mooks/patio-mock"
import { arrayPiscina } from "../../mooks/piscina-mock"

const buttonsArray = ["todo", "habitaciones", "area-comun", "patio", "pileta"]

const GaleryImgs = () => {
  return (
    <section>
      <p>GALERIA</p>
      <div>
        <ul>
          {buttonsArray.map((button) => {
            return (
              <button key={button}>{button}</button>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default GaleryImgs
