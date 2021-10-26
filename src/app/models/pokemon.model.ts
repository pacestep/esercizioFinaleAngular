import { IAbility } from "./ability.model";
import { IForm } from "./form.model";
import { IIndex } from "./index.model";
import { IMoveBundle } from "./move.model";
import { ISpecie } from "./specie.model";
import { ISprite } from "./sprite.model";
import { IType } from "./type.model";


export interface IPokemon {
    abilities: IAbility[];
    base_experience: number;
    forms: IForm[];
    game_indices:IIndex[];
    height: number;
    held_items: unknown[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: IMoveBundle[];
    name: string;
    order: number;
    past_types: unknown[];
    species: ISpecie;
    sprites: ISprite;
    types: IType[];
    weight:number;
}

export interface ISelectedPokemon {
    pokemon: IPokemon;
    action: "cattura" | "rifiuta";
}
