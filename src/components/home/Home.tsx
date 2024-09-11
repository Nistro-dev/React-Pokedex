// Import la libraire pour React
import React from 'react';
// Import les composants nécessaires pour FluentUI
import { createTableColumn, DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, FluentProvider, Spinner, TableCellLayout, TableColumnDefinition, webLightTheme } from '@fluentui/react-components';
// Import le lien pour naviguer entre les pages
import { NavLink } from 'react-router-dom';
// Import le hook pour récupérer les pokémons
import GetPokemons from '../../hooks/getPokemons';
import IPokemon from '../../interfaces/IPokemon';

// Créer un composant pour la page d'accueil en utilisant une ofnction
const Home: React.FC<{}> = () => {

    // Créer une fonction qui récupère les pokémons et les affiche
    const GetPokemonsRender: React.FC = () => {
        // Récupère la liste des pokémons ainsi que "loading" pour savoir si les pokemons ont fini de charger
        const { pokemonList, loading } = GetPokemons();
 
        // Si les pokémons sont en train de charger, affiche loader
        if (loading) {
            return <Spinner label="Chargement des Pokémon..." />;
        }
    
        // Créer les différentes colonnes nécessaires au data grid
        const columns: TableColumnDefinition<IPokemon>[] = [
            createTableColumn<IPokemon>({
                columnId: "id",
                renderHeaderCell: () => "ID",
                renderCell: (pokemon) => {
                    return (
                        <TableCellLayout>
                            {pokemon.id}
                        </TableCellLayout>
                    )
                }
            }),
            createTableColumn<IPokemon>({
                columnId: "name",
                renderHeaderCell: () => "Nom",
                renderCell: (pokemon) => {
                    return (
                        <TableCellLayout>
                            {pokemon.name}
                        </TableCellLayout>
                    )
                }
            }),
            createTableColumn<IPokemon>({
                columnId: "image",
                renderHeaderCell: () => "Image",
                renderCell: (pokemon) => {
                    return (
                        <TableCellLayout>
                            <img src={pokemon.image} alt={pokemon.name} />
                        </TableCellLayout>
                    )
                }
            })
        ];
    
        // Retourne un rendu
        return (
            <>
                <h1>Liste des Pokémon</h1>
                {/* Retourne la liste des pokémons dans un data grid */}
                <DataGrid
                    items={pokemonList || []}
                    columns={columns}
                    sortable>
                    <DataGridHeader>
                        <DataGridRow>
                            {({ renderHeaderCell }) => (
                                <DataGridHeaderCell>
                                    {renderHeaderCell()}
                                </DataGridHeaderCell>
                            )}
                        </DataGridRow>
                    </DataGridHeader>
                    <DataGridBody<IPokemon>>
                        {({ item, rowId }) => (
                            <NavLink to={`/pokemon/${item.id}`} key={rowId}>
                                <DataGridRow<IPokemon> key={rowId} >
                                    {({ renderCell }) => (
                                        <DataGridCell>{renderCell(item)}</DataGridCell>
                                    )}
                                </DataGridRow>
                            </NavLink>
                        )}
                    </DataGridBody>
                </DataGrid>
            </>
        );
    }

    // Retourne un rendu qui permet d'afficher les pokémons
    return (
        <FluentProvider theme={webLightTheme}>
            {/* Utilise React.Supsense pour afficher un chargement en attendant le chargement des pokémons */}
            <React.Suspense fallback={<Spinner label="Chargement des Pokémon..." />}>
                {/* Appelle le composant juste au dessus */}
                <GetPokemonsRender />
            </React.Suspense>
        </FluentProvider>
    );

};

// Exporte le composant pour pouvoir l'utiliser ailleurs
export default Home;