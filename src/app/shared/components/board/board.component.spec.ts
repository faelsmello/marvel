import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { SharedModule } from '../../shared.module';
import { GameService } from 'src/app/core/services/game.service';
import { of } from 'rxjs';

describe('BoardComponent', () => {
    let component: BoardComponent;
    let fixture: ComponentFixture<BoardComponent>;
    let gameService: jasmine.SpyObj<GameService>;

    beforeEach(() => {
        const gameServiceSpy = jasmine.createSpyObj('GameService', [
            'getWinner',
            'updatePlayers',
            'completePlayers',
        ]);
        TestBed.configureTestingModule({
            declarations: [BoardComponent],
            imports: [SharedModule],
            providers: [{ provide: GameService, useValue: gameServiceSpy }],
        });
        fixture = TestBed.createComponent(BoardComponent);
        component = fixture.componentInstance;
        gameService = TestBed.inject(
            GameService
        ) as jasmine.SpyObj<GameService>;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should subscribe to dataPlayers$ on ngOnInit', () => {
    //     const players = [
    //         { name: 'Player 1', score: 0 },
    //         { name: 'Player 2', score: 0 },
    //     ];
    //     gameService.dataPlayers$.and.returnValue(of(players));

    //     component.ngOnInit();

    //     expect(component.players).toEqual(players);
    // });

    // it('should call gameService methods correctly when winner is found', () => {
    //     const mockSquares = ['X', 'X', 'X', null, null, null, null, null, null];
    //     const mockPlayer = { name: 'Player 1', score: 0 };
    //     gameService.getWinner.and.returnValue('X');

    //     component.winner(mockSquares);

    //     expect(gameService.getWinner).toHaveBeenCalledWith(mockSquares);
    //     expect(gameService.updatePlayers).toHaveBeenCalledWith([mockPlayer]);
    // });

    // it('should call completePlayers on ngOnDestroy', () => {
    //     component.ngOnDestroy();
    //     expect(gameService.completePlayers).toHaveBeenCalled();
    // });
});
