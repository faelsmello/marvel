import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/services/game.service';
import { Player } from '../../utils/players';
import { IDialogBox } from '../../interfaces/core';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit, OnDestroy {
    public players: Array<Player> = [];
    public isDialogMessage!: IDialogBox<string>;
    public isShowWinner: boolean = false;
    public squares: Array<string | null> = new Array(9).fill(null);

    constructor(private readonly gameService: GameService) {}

    public ngOnInit(): void {
        this.gameService.dataPlayers$.subscribe(
            (players) => (this.players = players)
        );
    }

    public winner(squares: Array<string | null>): void {
        const win = this.gameService.getWinner(squares);

        if (win === 'draw') {
            this.openDialog(`Deu empate!`);
            return;
        }

        if (win) {
            const indPlayer = this.getPlayerWinner(win);
            this.players[indPlayer].score += 1;
            this.gameService.updatePlayers(this.players);
            this.openDialog(`${this.players[indPlayer].name} é o Vencedor!`);
        }
    }

    public closeDialog(event: boolean): void {
        this.isShowWinner = false;
        this.squares = new Array(9).fill(null);
    }

    public ngOnDestroy(): void {
        this.gameService.completePlayers();
    }

    private getPlayerWinner(symbol: string): number {
        return this.players.findIndex((player) => player.player === symbol);
    }

    private openDialog(message: string): void {
        this.isShowWinner = true;
        this.isDialogMessage = {
            data: message,
        };
    }
}
