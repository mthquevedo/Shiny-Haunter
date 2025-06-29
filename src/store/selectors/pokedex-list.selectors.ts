import { RootState } from "..";



export const selectPokedexList = (state: RootState) => state.pokedexList.list;
export const selectPokedexHasNextPage = (state: RootState) => state.pokedexList.next;
export const selectPokedexHasNextPrevious = (state: RootState) => state.pokedexList.previous;
export const selectIsPokedexLoading = (state: RootState) => state.pokedexList.loading;
export const selectPokedexOffset = (state: RootState) => state.pokedexList.offset;