import {FC} from "react";
import {useQuery} from "react-query";
import {fetchPokemons} from "../../service/PokemonService";
import {PokemonItem} from "./pokemonItem/PokemonItem";
import {Container, Grid} from "@mui/material";
import classes from "./PokemonList.module.css"

export const PokemonList: FC = () => {
    console.log("rendering pokemon list.......")
    const {
        isLoading,
        data: pokemons
    } = useQuery(
        process.env.REACT_APP_GET_Pokemons_REQUEST_ID!,
        fetchPokemons,
        {refetchOnWindowFocus: false}
    )
    if (isLoading) {
        return <p>Loading........</p>
    }

    return <Container maxWidth={false} className={classes.customContainer}>
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {pokemons?.results.map(apiResource => {
                return <PokemonItem name={apiResource.name} url={apiResource.url}
                                    key={apiResource.url}/>
            })}
        </Grid>
    </Container>
}