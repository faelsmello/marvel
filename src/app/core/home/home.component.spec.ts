import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent, HeaderComponent],
            imports: [RouterTestingModule],
        });
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should have router-outlet in template', () => {
    //     const compiled = fixture.nativeElement;
    //     expect(compiled.querySelector('router-outlet')).toBeTruthy();
    // });

    // it('should render router-outlet as RouterOutlet component', () => {
    //     const outlet =
    //         fixture.debugElement.nativeElement.querySelector('router-outlet');
    //     expect(outlet).toBeTruthy();
    //     expect(outlet.componentInstance instanceof RouterOutlet).toBe(true);
    // });
});
