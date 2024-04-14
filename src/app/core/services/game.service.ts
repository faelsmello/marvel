import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from 'src/app/shared/utils/players';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public dataPlayers$ = new BehaviorSubject<Array<Player>>([]);

    constructor() {}

    public getWinner(squares: Array<string | null>): string | null {
        const linesWinner: Array<Array<number>> = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const [a, b, c] of linesWinner) {
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }

        if (squares.every((square) => square !== null)) {
            return 'draw';
        }

        return null;
    }

    public updatePlayers(players: Array<Player>): void {
        this.dataPlayers$.next(players);
    }

    public completePlayers(): void {
        this.dataPlayers$.complete();
    }
}
