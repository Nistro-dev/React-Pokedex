import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

interface PokedexState {
  pokemonList: Pokemon[];
}

const initialState: PokedexState = {
  pokemonList: [],
};

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemonList = action.payload;
    },
  },
});

export const { setPokemonList } = pokedexSlice.actions;
export default pokedexSlice.reducer;