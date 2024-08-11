import './App.scss'
import { Navbar, IconNav, SlaiderlHome, BedroomsContainer, GaleryImgs, Location, Contact, Footer } from './components/Index'

function App() {

  return (
    <>
      <header>
        <div className='header-container'>
          <IconNav/>
          <Navbar/>
        </div>
      </header>
      <main>
        <SlaiderlHome />
        <BedroomsContainer />
        <GaleryImgs />
        <Location />
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
