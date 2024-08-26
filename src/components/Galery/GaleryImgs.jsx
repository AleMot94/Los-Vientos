import { bedrooms } from "../../mooks/bedrooms-mook"
import { arrayAreaComun } from "../../mooks/area-comun-mock"
import { patioArray } from "../../mooks/patio-mock"
import { arrayPiscina } from "../../mooks/piscina-mock"

/* const buttonsArray = ["todo", "habitaciones", "area-comun", "patio", "pileta"] */

const arrayBedrooms = bedrooms.flatMap((bedroom) => bedroom.imgs)

const imgsArray = [...arrayAreaComun, ...patioArray, ...arrayPiscina, ...arrayBedrooms]

const buttonsArray = ["todo", ...new Set(imgsArray.map((img) => img.category))]

const GaleryImgs = () => {
  return (
    <section className="galery-conteiner">
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
      <div>
        {imgsArray.map((img) => {
          return (
            <img key={img.id} src={img.img} alt={img.name + "foto"} />
          )
        })}
      </div>
    </section>
  )
}

export default GaleryImgs
