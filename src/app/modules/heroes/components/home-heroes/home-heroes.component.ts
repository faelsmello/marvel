import { GameService } from 'src/app/core/services/game.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/shared/utils/heroe';
import { Player } from 'src/app/shared/utils/players';
@Component({
    selector: 'app-home-heroes',
    templateUrl: './home-heroes.component.html',
    styleUrls: ['./home-heroes.component.scss'],
})
export class HomeHeroesComponent {
    public searchHeroes = `Selecionar Héroi X`;
    public players: Array<Player> = [];

    constructor(
        private readonly _router: Router,
        private readonly gameService: GameService
    ) {}

    public eventPlayers(players: Record<string, Heroe>): void {
        this.players = [];
        for (let keyPlayer of Object.keys(players)) {
            this.players.push(new Player(players[keyPlayer], keyPlayer));
        }

        if (this.players.length) {
            this.searchHeroes = `Selecionar Héroi O`;
        }

        this.gameService.updatePlayers(this.players);
    }

    public goToPlay(): void {
        this._router.navigate(['game']);
    }
}
