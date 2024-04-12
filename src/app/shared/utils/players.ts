import { Heroe } from './heroe';

export class Player {
    id: number;
    name: string;
    thumb: string;
    player: string;
    score: number;

    constructor(heroe: Heroe, player: string) {
        this.id = heroe.id;
        this.name = heroe.name;
        this.thumb = heroe.thumb;
        this.player = player;
        this.score = 0;
    }
}
