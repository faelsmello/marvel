import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDialogBox } from '../../interfaces/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent<T> {
    @Input() public data!: IDialogBox<T>;
    @Input() public isShow = false;
    @Output() public eventActions: EventEmitter<boolean> = new EventEmitter();

    public reset(): void {
        this.eventActions.emit(true);
    }
}
