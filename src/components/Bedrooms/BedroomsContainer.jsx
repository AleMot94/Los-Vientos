import { bedrooms } from "../../mooks/bedrooms-mook"

const BedroomsContainer = () => {
  return (
    <section className="bedrooms-container">
      <h2>Habitaciones</h2>
      <ul>
        {bedrooms.map((bedroom) => {
          return (
            <li key={bedroom.id}>
              <div>
                <h3>{bedroom.name}</h3>
                <img src={bedroom.img} alt={bedroom.name} name={bedroom.name} />
                <p>{bedroom.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default BedroomsContainer
