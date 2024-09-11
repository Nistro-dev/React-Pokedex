// Importe la librairie React
import React from 'react';
// Import "useParams" afin de pouvoir récupérer les paramètres de l'URL, ici l'id du Pokémon
import { useParams } from 'react-router-dom';
// Improt les composants nécessaires de FluentUI
import { Avatar, FluentProvider, InfoLabel, Label, MessageBar, MessageBarBody, MessageBarTitle, Spinner, Table, TableBody, TableCell, TableHeader, TableRow, webLightTheme, Text, Title1, Body1, Body1Stronger } from '@fluentui/react-components';
// Importe le hook pour récupérer les pokémons
import getPokemons from '../../hooks/getPokemons';
// Import le style pour le composant
import useStyles from './Pokemon.style';


// Créer un composant pour les Pokémon en utilisant une fonction
const Pokemon: React.FC<{}> = () => {
    const styles = useStyles();

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

        // Si cela a fini de charger et que le Pokémon n'existe pas, affiche un message d'erreur
        if (loading === false && !pokemon) {
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
                <div className={styles.pokemonDetailsContainer}>
                    <div className={styles.pokemonHeader}>
                        <Avatar
                            image={{
                                src: pokemon.image,
                                alt: pokemon.name
                            }}
                            name={pokemon.name}
                            initials="128" size={128}
                        />
                        <Title1>{pokemon.name}</Title1>
                    </div>

                    <div className={styles.pokemonInfo}>
                        <Label weight="semibold">Types:</Label>
                        <ul className={styles.pokemonInfoList}>
                            {pokemon.types.map((type: string, index: number) => (
                                <li className={styles.pokemonInfoListItem} key={index}>{type.charAt(0).toUpperCase() + type.slice(1)}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.pokemonInfo}>
                        <Label weight="semibold">Capacités:</Label>
                        <ul className={styles.pokemonInfoList}>
                            {pokemon.abilities.map((ability: string, index: number) => (
                                <li className={styles.pokemonInfoListItem} key={index}>{ability.charAt(0).toUpperCase() + ability.slice(1)}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.pokemonStats}>
                        <Label>Stats:</Label>
                        <table className={styles.pokemonStatsTable}>
                            <thead>
                                <tr>
                                    <th className={styles.pokemonStatsTableTh}><Body1Stronger>Statistique</Body1Stronger></th>
                                    <th className={styles.pokemonStatsTableTh}><Body1Stronger>Valeur</Body1Stronger></th>
                                </tr>
                            </thead>
                            <tbody>
                                {pokemon.stats.map((stat: { name: string, value: number }, index: number) => (
                                    <tr key={index}>
                                        <td className={styles.pokemonStatsTableTd}><Body1>{stat.name}</Body1></td>
                                        <td className={styles.pokemonStatsTableTd}><Body1>{stat.value}</Body1></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
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