import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { usePokeList } from "./hooks/usePokeList";
import { Pokedex } from "./pages/Pokedex";
import { Shinys } from "./pages/Shinys";
import { Wishlist } from "./pages/Wishlist";
import { RootState } from "./store";

function App() {
  const { fetchAllPokemons } = usePokeList();
  const pokemonList = useSelector((state: RootState) => state.allPokemonList.list);

  useEffect(() => {
    if (pokemonList.length === 0) {
      fetchAllPokemons();
    }
  }, [])

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