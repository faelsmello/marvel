import { Component } from '@angular/core';
import { Heroe } from 'src/app/shared/utils/heroe';
@Component({
    selector: 'app-home-heroes',
    templateUrl: './home-heroes.component.html',
    styleUrls: ['./home-heroes.component.scss'],
})
export class HomeHeroesComponent {
    public searchHeroes = 'Buscar Personagem';
    public players!: Record<string, Heroe>;

    constructor() {}

    public eventPlayers(players: Record<string, Heroe>): void {
        this.players = players;
    }
}
