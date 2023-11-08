import { Container, Grid } from '@mui/material'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import NotFound from '../components/NotFound';
import Loading from '../components/Loading'

let allPokemons = [];

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [generations, setGenerations] = useState([1]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        async function setAllPokemons() {
            setIsLoading(true);
            allPokemons = await getPokemons();
            setIsLoading(false);
            pokemonFilter(searchText);
        }
        setAllPokemons();
    }, [generations]);

    const getPokemonIdFromUrl = (url) => {
        return parseInt(new RegExp('\/(\\d+)\/$').exec(url)[1]);
    }

    const getPokemons = async () => {
        const endpoints = [];

        for (const generation of generations) {
            const genUrl = `https://pokeapi.co/api/v2/generation/${generation}`;
            const responseGen = await axios.get(genUrl);
            for (const pokemon of responseGen.data.pokemon_species) {
                const pokemonId = getPokemonIdFromUrl(pokemon.url);
                const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
                endpoints.push(pokeUrl);
            }
        }
        return axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
    };

    const pokemonFilter = (name) => {
        if (name === '') {
            setPokemons(allPokemons);
        }
        const filteredPokemons = allPokemons.filter(pkmn => pkmn.data.name.toLowerCase().includes(name.toLowerCase()));
        setPokemons(filteredPokemons);
    };


    return (
        <div>
            <NavBar setSearchText={setSearchText} generations={generations} setGenerations={setGenerations} pokemonFilter={pokemonFilter} />           
            <Container maxWidth="false">
                {isLoading ? <Loading /> :
                    <Grid container spacing={2}>
                        {pokemons.length === 0 && searchText.length > 0 ? <NotFound /> :
                            pokemons.map((pokemon, key) =>
                                <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                                    <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                                </Grid>
                            )
                        }
                    </Grid>
                }
            </Container>
        </div>
    )
}