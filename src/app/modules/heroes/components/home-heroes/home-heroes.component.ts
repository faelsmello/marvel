import { Component } from '@angular/core';
import { Heroe } from 'src/app/shared/utils/heroe';
import { Player } from 'src/app/shared/utils/players';
@Component({
    selector: 'app-home-heroes',
    templateUrl: './home-heroes.component.html',
    styleUrls: ['./home-heroes.component.scss'],
})
export class HomeHeroesComponent {
    public searchHeroes = 'Buscar Personagem';
    public players!: Array<Player>;

    constructor() {}

    public eventPlayers(players: Record<string, Heroe>): void {
        this.players = [];
        for (let keyPlayer of Object.keys(players)) {
            this.players.push(new Player(players[keyPlayer], keyPlayer));
        }
    }
}
