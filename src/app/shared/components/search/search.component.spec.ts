import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { Heroe } from '../../utils/heroe';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
} from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import { of } from 'rxjs';
import { MOCK_HEROE } from 'src/app/core/mock/mock';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let httpServiceStub: Partial<HttpService>;

    beforeEach(async () => {
        httpServiceStub = {
            fetchHeroes: jasmine.createSpy().and.returnValue(of([])),
        };

        await TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [ReactiveFormsModule],
            providers: [
                FormBuilder,
                { provide: HttpService, useValue: httpServiceStub },
            ],
        });
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should select player and emit event', () => {
    //     component.isNext = true;
    //     component.selectPlayer(MOCK_HEROE);

    //     expect(component.players['X']).toEqual(MOCK_HEROE);
    //     expect(component.isNext).toBe(false);
    //     expect(component.eventEmitterPlayers.emit).toHaveBeenCalledWith(
    //         component.players
    //     );
    // });

    // it('should fetch heroes when query changes', () => {
    //     const httpService = TestBed.inject(HttpService);
    //     const query = 'American Eagle';
    //     const expectedHeroes: Heroe[] = [MOCK_HEROE];

    //     component.searchForm.controls['query'].setValue(query);

    //     expect(httpService.fetchHeroes).toHaveBeenCalledWith(
    //         query.toLocaleLowerCase()
    //     );
    //     httpService
    //         .fetchHeroes(query.toLocaleLowerCase())
    //         .subscribe((heroes) => {
    //             expect(component.heroes).toEqual(expectedHeroes);
    //         });
    // });
});
