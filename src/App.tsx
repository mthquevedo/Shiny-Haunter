import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { usePokedex } from "../src/hooks/usePokedex";
import { usePokeList } from "./hooks/usePokeList";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { Pokedex } from "./pages/Pokedex";
import { Shinys } from "./pages/Shinys";
import { Wishlist } from "./pages/Wishlist";
import { RootState } from "./store";

function App() {
  const { fetchAllPokemons } = usePokeList();
  const { getPokemonPage } = usePokedex();
  const allPokemonList = useSelector((state: RootState) => state.allPokemonList.list);
  const pokemonPageList = useSelector((state: RootState) => state.pokedexList.list);

  //Hook RunOnce
  useEffect(() => {
    const initializeData = () => {
      if (allPokemonList.length === 0) {
        fetchAllPokemons();
      }

      if (pokemonPageList.length === 0) {
        getPokemonPage();
      }
    };

    initializeData();
  }, []);

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