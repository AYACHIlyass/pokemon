import axios from "axios";
import {PokemonsResponse} from "../model/PokemonsResponse";
import {Pokemon} from "../model/Pokemon";

export const fetchPokemons = async (): Promise<PokemonsResponse> => {
    const response = await axios.get(process.env.REACT_APP_POKEMON_API_BASE_URL!)
    return response.data
}
export const fetchPokemon = async (pokemonUrl: string) : Promise<Pokemon> => {
    const response = await axios.get(pokemonUrl)
    const pokemon: Pokemon = response.data
    return pokemon
}