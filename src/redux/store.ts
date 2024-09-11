// Import les fonctions nécessaires pour créer le store Redux
import { configureStore } from '@reduxjs/toolkit';
import pokedexReducer from './pokedexReducer';

// Créer le store Redux
export const store = configureStore({
    reducer: {
        pokedex: pokedexReducer,
    },
});

// Export le type RootState et le type AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;