import { IVersionGroupDetail } from "./version.model";

export interface IMoveBundle {
    move:IMove;
    version_group_details: IVersionGroupDetail[];
}

export interface IMove {
    name: string;
    url: string;
}