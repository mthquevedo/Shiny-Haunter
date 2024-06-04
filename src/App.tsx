import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import PokemonList from "./pages/PokemonList"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<PokemonList />} />

            <Route path="pokemon" >
              <Route path="list" element={<div>Conteudo</div>} />
              
              <Route path="*" element={<Navigate to="/pokemon/list" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App