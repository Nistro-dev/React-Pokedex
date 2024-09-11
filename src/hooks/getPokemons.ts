import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonList } from "../redux/pokedexReducer";
import { RootState } from "../redux/store";

const GetPokemons = (id?: number) => { // Ajout de l'argument id facultatif
    const dispatch = useDispatch();
    const pokemonList = useSelector((state: RootState) => state.pokedex.pokemonList);
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState<any>(null); // Ajout du state pour stocker un seul Pokémon

    useEffect(() => {
        if (pokemonList.length === 0) {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
                .then(response => response.json())
                .then(data => {
                    const pokemonList = data.results.map((pokemon: any, index: number) => ({
                        id: index + 1,
                        name: pokemon.name,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                    }));
                    dispatch(setPokemonList(pokemonList));
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [dispatch, pokemonList]);

    useEffect(() => {
        if (id && pokemonList.length > 0) {
            const selectedPokemon = pokemonList.find((pokemon: any) => pokemon.id === id);
            setPokemon(selectedPokemon);
        }
    }, [id, pokemonList]);

    if (id && pokemon) {
        return { pokemon, loading };
    } else {
        return { pokemonList, loading };
    }
}

export default GetPokemons;
