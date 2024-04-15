import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-squares',
    templateUrl: './squares.component.html',
    styleUrls: ['./squares.component.scss'],
})
export class SquaresComponent {
    @Input() public squares: Array<string | null> = new Array(9).fill(null);
    @Output() public eventWhoWon: EventEmitter<Array<string | null>> =
        new EventEmitter();

    public isXNext = true;

    public setPlayer(ind: number): void {
        if (this.squares[ind]) return;

        this.squares[ind] = this.isXNext ? 'X' : 'O';
        this.isXNext = !this.isXNext;
        this.eventWhoWon.emit(this.squares);
    }
}
