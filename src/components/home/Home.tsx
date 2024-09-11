import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setPokemonList } from '../../redux/pokedexReducer';

const Home: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const pokemonList = useSelector((state: RootState) => state.pokedex.pokemonList);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => {
            const pokemonList = data.results.map((pokemon: any, index: number) => ({
                id: index + 1,
                name: pokemon.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            }));
            dispatch(setPokemonList(pokemonList));
        });
    }, [dispatch]);

    return (
        <>
        <h1>Pokédex</h1>
        <div>
            {pokemonList.map(pokemon => (
                <div key={pokemon.id}>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <p>{pokemon.name}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default Home;