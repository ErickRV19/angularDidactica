export interface Usuario{
    id?:string;
    email?:string;
    exp:number;
    game: Game[];
}

interface Game{
    exp: number,
    level: number
}