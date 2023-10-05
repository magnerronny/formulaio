import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Formulario } from "./components"
import { Characters } from "./components/pages/Character/Characters"
import { Movies } from "./components/pages"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/"  element = {<Characters/>} />
          <Route path="/formulario" element ={<Formulario/>} />
          <Route path="/movies" element ={<Movies/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
