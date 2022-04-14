import Main from "components/Main";
import Footer from "components/Footer";
import AnimalProvider from "context/AnimalCTX";

function App() {
  // main page (home)
  return (
      <AnimalProvider>
        <Main />
        <Footer />
      </AnimalProvider>
  )
}

export default App;
