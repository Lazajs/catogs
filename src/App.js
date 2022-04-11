import Main from "./components/Main";
import { useState } from 'react'
import Footer from "./components/Footer";

function App() {
  const [shown, setShown] = useState([])
  // main page (home)
  return (<>
        <Main shown={shown} setShown={setShown} />
        <Footer />
        </>
  )
}

export default App;
