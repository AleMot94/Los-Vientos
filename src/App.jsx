import "./App.scss";
import {
  Navbar,
  IconNav,
  SliderlHome,
  BedroomsContainer,
  GaleryImgs,
  Location,
  Contact,
  Footer,
} from "./components/Index";

function App() {
  return (
    <>
      <header>
        <div>
          <IconNav />
          <Navbar />
        </div>
      </header>
      <main>
        <SliderlHome />
        <BedroomsContainer />
        <GaleryImgs />
        <Location />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
