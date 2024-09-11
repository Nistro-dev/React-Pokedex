import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
    pokemonDetailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto'
    },
    pokemonHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    pokemonInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    pokemonStats: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    pokemonStatsTable: {
        width: '100%',
        borderCollapse: 'collapse'
    },
    pokemonStatsTableTh: {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
        backgroundColor: '#f4f4f4',
        fontWeight: 'bold'
    },
    pokemonStatsTableTd: {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left'
    },
    pokemonInfoList: {
        listStyleType: 'none',
        paddingLeft: '0'
    },
    pokemonInfoListItem: {
        marginLeft: '20px'
    }
});

export default useStyles;
