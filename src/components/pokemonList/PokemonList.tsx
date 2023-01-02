import {FC, useEffect, useState} from "react";
import {useQuery} from "react-query";
import {fetchPokemons} from "../../service/PokemonService";
import {PokemonItem} from "./pokemonItem/PokemonItem";
import {Container, Grid} from "@mui/material";
import classes from "./PokemonList.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {ApiResource} from "../../model/ApiResource";
import {applicationStatusActions} from "../../store/ApplicationStatusSlice/ApplicationStatusSlice";
import {Spinner} from "../shared/spinner/Spinner";
import {FullPageSpinner} from "../shared/fullPageSpinner/FullPageSpinner";

export const PokemonList: FC = () => {
    const hasReachedBottom: boolean = useSelector((state: RootState) => state.applicationState.hasReachedBottom);
    const [fetchUrl, setFetchUrl] = useState<string>(process.env.REACT_APP_POKEMON_API_BASE_URL!);
    const [pokemons, setPokemons] = useState<ApiResource[]>([]);
    const dispatcher = useDispatch<AppDispatch>();
    const {
        refetch,
        isLoading,
    } = useQuery(
        process.env.REACT_APP_GET_Pokemons_REQUEST_ID!,
        () => fetchPokemons(fetchUrl),
        {
            refetchOnWindowFocus: false, enabled: false,
            onSuccess: (data) => {
                setFetchUrl(data!.next);
                setPokemons((previousPokemons) => [
                    ...previousPokemons,
                    ...data!.results,
                ]);
            }
        }
    );
    useEffect(() => {
        if (hasReachedBottom || pokemons.length === 0) {
            refetch();
            dispatcher(applicationStatusActions.farFromBottom())
        }
    }, [hasReachedBottom]);
    if (isLoading && pokemons.length === 0) {
        return <FullPageSpinner/>
    }
    return <Container maxWidth={false} className={classes.customContainer}>
        {(pokemons.length !== 0) &&
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {pokemons.map((apiResource, index) => {
                    return (
                        <PokemonItem
                            name={apiResource.name}
                            url={apiResource.url}
                            key={index}
                        />
                    );
                })}
            </Grid>}
        {isLoading && <Spinner/>}
    </Container>


};
