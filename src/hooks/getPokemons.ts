// Import useEffect et useState de React 
import { useEffect, useState } from "react";
// Import useDispatch et useSelector de React Redux
import { useDispatch, useSelector } from "react-redux";
// Importe l'action setPokemonList du reducer pokedexReducer
import { setPokemonList } from "../redux/pokedexReducer";
// Importe le type RootState du store Redux
import { RootState } from "../redux/store";

// Créer un hook pour récupérer les pokémons
const GetPokemons = (id?: number) => { // Ajoute un paramètre optionnel "id" de type number
    const dispatch = useDispatch();
    // Récupère la liste des pokémons du store Redux
    const pokemonList = useSelector((state: RootState) => state.pokedex.pokemonList);
    // Créer un state pour le chargement
    const [loading, setLoading] = useState(true);
    // Créer un state pour le pokémon sélectionné
    const [pokemon, setPokemon] = useState<any>(null);

    // Utilise useEffect pour charger les pokémons si la liste est vide
    useEffect(() => {
        // Si la liste est vide, charge les pokémons
        if (pokemonList.length === 0) {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
                .then(response => response.json())
                .then(data => {
                    const pokemonList = data.results.map((pokemon: any, index: number) => ({
                        id: index + 1,
                        name: pokemon.name,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                    }));
                    // Dispatch l'action setPokemonList pour ajouter les pokémons au store Redux
                    dispatch(setPokemonList(pokemonList));
                    // Met le state "loading" à false
                    setLoading(false);
                });
        } else {
            // Sinon, met le state "loading" à false
            setLoading(false);
        }
    }, [dispatch, pokemonList]);

    // Utilise useEffect pour récupérer le pokémon sélectionné si l'id est défini
    useEffect(() => {
        // Si l'id est défini, charge le pokémon
        if (id) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(response => response.json())
                .then(data => {
                    const pokemon = {
                        id: data.id,
                        name: data.name,
                        image: data.sprites.front_default,
                        types: data.types.map((type: any) => type.type.name),
                        abilities: data.abilities.map((ability: any) => ability.ability.name),
                        stats: data.stats.map((stat: any) => ({
                            name: stat.stat.name,
                            value: stat.base_stat
                        }))
                    };
                    // Met le pokémon dans le state "pokemon"
                    setPokemon(pokemon);
                    // Met le state "loading" à false
                    setLoading(false);
                });
        }
    }, [id, pokemonList]);

    // Si l'id et le pokémon sont définis, retourne le pokémon, sinon retourne la liste des pokémons
    if (id && pokemon) {
        return { pokemon, loading };
    } else {
        return { pokemonList, loading };
    }
}

// Exporte le hook pour pouvoir l'utiliser ailleurs
export default GetPokemons;