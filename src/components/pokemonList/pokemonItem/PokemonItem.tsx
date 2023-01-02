import {ApiRessouce} from "../../../model/ApiRessouce";
import {useQuery} from "react-query";
import {fetchPokemon} from "../../../service/PokemonService";
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import classes from "./PokemonItem.module.css"
import cardLoader from '../../../assets/images/cardLoader.gif';
import pokeBall from '../../../assets/images/pokeBall.png';

export const PokemonItem = (apiRessouce: ApiRessouce) => {
    const {
        isLoading,
        data: pokemon,
        isError,
    } = useQuery(apiRessouce.url,
        () => fetchPokemon(apiRessouce.url), {refetchOnWindowFocus: false})
    return <Grid item mx={3} xs={6} sm={4} md={3} style={{height: '100%'}}>
        <Card className={classes.cardContainer}>
            {isLoading && <img src={cardLoader} className={classes.cardLoader}></img>}
            {(!isLoading && !isError) && <>
                <CardMedia
                    className={classes.pokemonImage}
                    component="img"
                    image={pokemon!.sprites.other["official-artwork"].front_default!}
                    alt={pokemon!.id + " image"}
                />
                <CardContent className={`${classes.cardContent} ${classes.center}`}>
                    <Typography className={classes.cardInfo} gutterBottom variant="h5" component="div">
                        {pokemon!.id}
                    </Typography>
                    <Typography className={classes.cardInfo} variant="subtitle1" color="text.secondary">
                        Name: {pokemon!.name}
                    </Typography>
                    <Typography className={classes.cardInfo} variant="subtitle1" color="text.secondary">
                        Order: {pokemon!.order}
                    </Typography>
                </CardContent>
                <Box
                    className={classes.center}
                >
                    <Box
                        component="img"
                        className={classes.pokemonBall}
                        src={pokeBall}
                    ></Box>
                </Box></>
            }
        </Card>
    </Grid>
}