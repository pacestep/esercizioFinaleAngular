import { IMove } from "./move.model";

export interface IVersion {
    name: string;
    url: string;
}

export interface IVersionGroupDetail {
    level_learned_at: number;
    move_learned_method: IMove;
    version_group: IVersion;
}