import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { FluentProvider, MessageBar, MessageBarBody, MessageBarTitle, Spinner, webLightTheme } from '@fluentui/react-components';
import getPokemons from '../../hooks/getPokemons';

const Pokemon: React.FC<{}> = () => {

    const GetPokemonRender: React.FC = () => {

        const { id } = useParams<{ id: string }>();
        const { pokemon, loading } = getPokemons(parseInt(id || "0"));

        if (loading) {
            return <Spinner label="Chargement des Pokémon..." />;
        }

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
    
        return (
            <FluentProvider theme={webLightTheme}>
                <h1>{pokemon?.name}</h1>
                <img src={pokemon?.image} alt={pokemon?.name} />
            </FluentProvider>
        );
    };

    return (
        <FluentProvider theme={webLightTheme}>
            <Suspense fallback={<div>Loading...</div>}>
                <GetPokemonRender />
            </Suspense>
        </FluentProvider>
    );
    
};

export default Pokemon;