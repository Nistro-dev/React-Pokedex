import { configureStore } from '@reduxjs/toolkit';
import pokedexReducer from './pokedexReducer';

// Créer le store Redux
export const store = configureStore({
    reducer: {
        pokedex: pokedexReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;