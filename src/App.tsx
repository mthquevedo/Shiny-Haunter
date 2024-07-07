import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { HomePage } from "./pages/HomePage"
import { Pokedex } from "./pages/Pokedex"
import { Shinys } from "./pages/Shinys"
import { Wishlist } from "./pages/Wishlist"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="listadedesejos" element={<Wishlist />} />
          <Route path="shinys" element={<Shinys />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App