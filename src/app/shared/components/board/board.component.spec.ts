import {
    ComponentFixture,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { SharedModule } from '../../shared.module';
import { GameService } from 'src/app/core/services/game.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MOCK_PLAYERS } from 'src/app/core/mock/mock';
import { Player } from '../../utils/players';

describe('BoardComponent', () => {
    let component: BoardComponent;
    let fixture: ComponentFixture<BoardComponent>;
    let gameServiceSpy: jasmine.SpyObj<GameService>;

    beforeEach(async () => {
        gameServiceSpy = jasmine.createSpyObj('GameService', [
            'dataPlayers$',
            'getWinner',
            'updatePlayers',
            'completePlayers',
        ]);

        await TestBed.configureTestingModule({
            declarations: [BoardComponent],
            imports: [SharedModule],
            providers: [{ provide: GameService, useValue: gameServiceSpy }],
        });
        fixture = TestBed.createComponent(BoardComponent);
        component = fixture.componentInstance;

        gameServiceSpy.dataPlayers$ = new BehaviorSubject<Array<Player>>(
            MOCK_PLAYERS
        );
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call openDialog and update state on winner (draw)', fakeAsync(() => {
        const isDraw = ['X', 'O', null, 'X', 'X', null, 'O', null, 'O'];
        gameServiceSpy.getWinner.and.returnValue('draw');

        component.winner(isDraw);
        fixture.detectChanges();

        expect(gameServiceSpy.getWinner).toHaveBeenCalledWith(isDraw);
        expect(component.isShowWinner).toBeTrue();
        expect(component.isDialogMessage).toEqual({ data: 'Deu empate!' });
    }));

    it('should call openDialog and update state on winner (X)', fakeAsync(() => {
        const isXWin = ['X', 'X', 'X', null, null, null, null, null, null];
        gameServiceSpy.getWinner.and.returnValue('X');

        component.winner(isXWin);
        fixture.detectChanges();
        expect(gameServiceSpy.getWinner).toHaveBeenCalledWith(isXWin);
        expect(component.isShowWinner).toBeTrue();
        expect(component.isDialogMessage).toEqual({
            data: `Hulk é o Vencedor!`,
        });
    }));

    it('should call closeDialog', fakeAsync(() => {
        const isArrayNull = [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
        ];
        component.closeDialog(true);
        fixture.detectChanges();
        expect(component.isShowWinner).toBeFalse();
        expect(component.squares).toEqual(isArrayNull);
    }));
});
