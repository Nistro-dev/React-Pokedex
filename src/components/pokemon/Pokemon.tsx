import React from 'react';
import { useParams } from 'react-router-dom';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Pokemon: React.FC<{}> = () => {
    const { id } = useParams<{ id: string }>();
    const pokemonList = useSelector((state: RootState) => state.pokedex.pokemonList);

    if (pokemonList.length === 0) {
        console.log('No data');
    } else {
        console.log(pokemonList);
    }
    return (
        <FluentProvider theme={webLightTheme}>
            <h1>Pokémon {id}</h1>
        </FluentProvider>
    );
};

export default Pokemon;