import { ICharacters, IResult } from '../interfaces/heroes';

export class Heroe {
    id: number;
    name: string;
    thumb: string;

    constructor(heroe: IResult) {
        this.id = heroe.id;
        this.name = heroe.name;
        this.thumb = `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`;
    }
}


