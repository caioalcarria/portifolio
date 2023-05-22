import "./App.css"
import { About } from "./components/About"
import { Contact } from "./components/Contact/"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Qualification } from "./components/Qualification"
import { Scrollup } from "./components/Scrollup"
import { Skills } from "./components/Skills"
import { Work } from "./components/Work"

function App() {


  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  )
}

export default App
