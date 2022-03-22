export interface IStats {
    base_stat: number;
    effort: number;
    stat: IStat;
}

export interface IStat {
    name: string;
    url: string;
}