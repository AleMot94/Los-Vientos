import { bedrooms } from "../../mooks/bedrooms-mook"
import { arrayAreaComun } from "../../mooks/area-comun-mock"
import { patioArray } from "../../mooks/patio-mock"
import { arrayPiscina } from "../../mooks/piscina-mock"
import { useState } from "react"

const arrayBedrooms = bedrooms.flatMap((bedroom) => bedroom.imgs)
const imgsArray = [...arrayAreaComun, ...patioArray, ...arrayPiscina, ...arrayBedrooms]
const buttonsArray = ["todo", ...new Set(imgsArray.map((img) => img.category))]

const GaleryImgs = () => {
  
  const [categorys] = useState(buttonsArray)
  const [imgs, setImgs] = useState(imgsArray)
  const [allImgs] = useState(imgsArray)

  const filterCategory = (category) => {
		if (category === 'todo'){
			setImgs(allImgs)
			return
		}

    const filteredData = allImgs.filter(img => img.category === category);
		setImgs(filteredData)
	}
  
  return (
    <section className="galery-conteiner">
      <p>GALERIA</p>
      <div className="buttons-container-galery">
        <ul className="buttons-filter-galery">
          {categorys.map((button) => {
            return (
              <button type='button' key={button} onClick={() => filterCategory(button)}>{button}</button>
            )
          })}
        </ul>
      </div>

      <div className="galery-imgs">
        {imgs.map((img) => {
          return (
            <img key={img.id} src={img.img} alt={img.name + "foto"} />
          )
        })}
      </div>
    </section>
  )
}

export default GaleryImgs
