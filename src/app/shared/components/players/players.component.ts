import { Component, Input } from '@angular/core';
import { Heroe } from '../../utils/heroe';
import { Player } from '../../utils/players';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.scss'],
})
export class PlayersComponent {
    @Input() public players!: Array<Player>;
}
