import React, { Suspense } from 'react';
import { createTableColumn, DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, FluentProvider, Spinner, TableCellLayout, TableColumnDefinition, webLightTheme } from '@fluentui/react-components';
import { NavLink } from 'react-router-dom';
import GetPokemons from '../../hooks/getPokemons';

interface IPokemon {
    id: number;
    name: string;
    image: string;
}

const Home: React.FC<{}> = () => {

    const GetPokemonsRender: React.FC = () => {
        const { pokemonList, loading } = GetPokemons();
    
        if (loading) {
            return <Spinner label="Chargement des Pokémon..." />;
        }
    
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
    
        return (
            <>
                <h1>Liste des Pokémon</h1>
                <DataGrid
                    items={pokemonList || []}
                    columns={columns}
                    sortable>
                    <DataGridHeader>
                        <DataGridRow
                            selectionCell={{ checkboxIndicator: { "aria-label": "Sélectionner la ligne" } }}
                        >
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
                                <DataGridRow<IPokemon>
                                    key={rowId}
                                    selectionCell={{ checkboxIndicator: { "aria-label": "Sélectionner la ligne" } }}
                                >
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

    return (
        <FluentProvider theme={webLightTheme}>
            <Suspense fallback={<Spinner label="Chargement des Pokémon..." />}>
                <GetPokemonsRender />
            </Suspense>
        </FluentProvider>
    );

};

export default Home;