import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { MOCK_PLAYERS } from '../mock/mock';
import { BehaviorSubject } from 'rxjs';
import { Player } from 'src/app/shared/utils/players';

describe('GameService', () => {
    let service: GameService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GameService);

        service.dataPlayers$ = new BehaviorSubject<Array<Player>>([]);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return the correct winner X', () => {
        const xWins = ['X', 'X', 'X', null, null, null, null, null, null];
        expect(service.getWinner(xWins)).toEqual('X');
    });

    it('should return draw', () => {
        const isDraw = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];

        expect(service.getWinner(isDraw)).toEqual('draw');
    });

    it('should return null', () => {
        const isNoWinner = ['X', null, 'O', 'O', 'X', null, null, null, null];

        expect(service.getWinner(isNoWinner)).toBeNull();
    });

    it('should update players correctly', () => {
        service.dataPlayers$.next(MOCK_PLAYERS);
        service.dataPlayers$.subscribe((players) => {
            expect(players).toEqual(MOCK_PLAYERS);
        });

        service.updatePlayers(MOCK_PLAYERS);
    });

    it('should complete players observable', () => {
        service.dataPlayers$.subscribe({
            complete: () => {
                expect(true).toBeTruthy();
            },
        });

        service.completePlayers();
    });
});
