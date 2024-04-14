import { Player } from './players';

export class Winner {
    player: Player;
    message: string;

    constructor(player: Player, message: string) {
        this.player = player;
        this.message = message;
    }
}
