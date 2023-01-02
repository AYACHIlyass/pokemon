import {ApiResource} from "./ApiResource";

export type PokemonsResponse = {
    next: string,
    results: ApiResource []
};