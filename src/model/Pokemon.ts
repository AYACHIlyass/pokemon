import {Ability} from "./Ability";
import {ApiResource} from "./ApiResource";
import {Stat} from "./Stat";

export type Pokemon = {
    id: number,
    name: string,
    height: number
    weight: number,
    order: number,
    abilities: Ability[],
    types: ApiResource[],
    stats: Stat[],
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    }

}