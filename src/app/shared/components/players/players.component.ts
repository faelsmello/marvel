import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../utils/players';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.scss'],
})
export class PlayersComponent {
    @Input() public players!: Array<Player>;
    @Input() public isHome: boolean = true;
}
