import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquaresComponent } from './squares.component';

describe('SquaresComponent', () => {
    let component: SquaresComponent;
    let fixture: ComponentFixture<SquaresComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SquaresComponent],
        });
        fixture = TestBed.createComponent(SquaresComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should check if player is X', () => {
        const index = 0;
        const spy = spyOn(component, 'setPlayer').and.callThrough();
        component.setPlayer(index);
        expect(component.squares[index]).toEqual('X');
        expect(spy).toHaveBeenCalledWith(index);
    });

    it('should check if player is O', () => {
        const index = 1;
        component.isXNext = false;
        component.setPlayer(index);
        expect(component.squares[index]).toEqual('O');
    });

    it('should check if it already exists', () => {
        const index = 1;
        component.squares[index] = 'X';
        component.setPlayer(index);
        expect(component.squares[index]).toEqual('X');
    });
});
