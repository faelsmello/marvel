import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { IDialogBox } from '../../interfaces/core';

describe('DialogComponent', () => {
    let component: DialogComponent<unknown>;
    let fixture: ComponentFixture<DialogComponent<unknown>>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DialogComponent],
        });
        fixture = TestBed.createComponent(DialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should receive data via @Input', () => {
        const testData: IDialogBox<string> = {
            data: 'Message here',
        };
        component.data = testData;
        expect(component.data).toEqual(testData);
    });

    it('should emit eventActions when reset is called', () => {
        spyOn(component.eventActions, 'emit');
        component.reset();
        expect(component.eventActions.emit).toHaveBeenCalledWith(true);
    });
});
