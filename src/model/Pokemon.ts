import {Ability} from "./Ability";
import {ApiRessouce} from "./ApiRessouce";
import {Stat} from "./Stat";

export type Pokemon = {
    id: number,
    name: string,
    height: number
    weight: number,
    order: number,
    abilities: Ability[],
    types: ApiRessouce[],
    stats: Stat[],
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    }

}