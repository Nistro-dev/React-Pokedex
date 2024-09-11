// Import createSlice et PayloadAction de Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IPokemon from '../interfaces/IPokemon';

// Créer une interface pour le state du reducer
interface IPokedexState {
  pokemonList: IPokemon[];
}

// Créer un state initial pour le reducer
const initialState: IPokedexState = {
  pokemonList: [],
};

// Créer un reducer avec Redux Toolkit
const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<IPokemon[]>) => {
      state.pokemonList = action.payload;
    },
  },
});

// Exporte les actions et le reducer
export const { setPokemonList } = pokedexSlice.actions;
export default pokedexSlice.reducer;