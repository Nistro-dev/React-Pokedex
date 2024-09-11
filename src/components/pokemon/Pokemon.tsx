// Importe la librairie React
import React from 'react';
// Import "useParams" afin de pouvoir récupérer les paramètres de l'URL, ici l'id du Pokémon
import { useParams } from 'react-router-dom';
// Improt les composants nécessaires de FluentUI
import { FluentProvider, MessageBar, MessageBarBody, MessageBarTitle, Spinner, webLightTheme } from '@fluentui/react-components';
// Importe le hook pour récupérer les pokémons
import getPokemons from '../../hooks/getPokemons';

// Créer un composant pour les Pokémon en utilisant une fonction
const Pokemon: React.FC<{}> = () => {

    // Créer un composant pour afficher les informations du Pokémon
    const GetPokemonRender: React.FC = () => {

    // Récupère l'id du Pokémon dans l'URL grâce a "useParams"
        const { id } = useParams<{ id: string }>();
        // Récupère le Pokémon et "loading" pour savoir si le Pokémon a fini de charger
        const { pokemon, loading } = getPokemons(parseInt(id || "0"));

        // Si le Pokémon est en train de charger, affiche un loader
        if (loading) {
            return <Spinner label="Chargement des Pokémon..." />;
        }

        // Si le Pokémon n'existe pas, affiche un message d'erreur
        if (!pokemon) {
            return (
                <MessageBar intent='error'>
                    <MessageBarBody>
                        <MessageBarTitle>Pokemon non trouvé</MessageBarTitle>
                        Le pokemon que vous cherchez n'existe pas.
                    </MessageBarBody>
                </MessageBar>
            )
        }
    
        // Retourne un rendu
        return (
            <FluentProvider theme={webLightTheme}>
                <h1>{pokemon?.name}</h1>
                <img src={pokemon?.image} alt={pokemon?.name} />
            </FluentProvider>
        );
    };

    // Retourne un rendu en utilisant le composant GetPokemonRender
    return (
        <FluentProvider theme={webLightTheme}>
            <React.Suspense fallback={<div>Loading...</div>}>
                <GetPokemonRender />
            </React.Suspense>
        </FluentProvider>
    );
    
};

// Exporte le composant pour pouvoir l'utiliser ailleurs
export default Pokemon;