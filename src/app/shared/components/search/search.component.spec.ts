import { HeroeMapper } from './../../utils/heroe.mapper';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { Heroe } from '../../utils/heroe';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import { of } from 'rxjs';
import { MOCK_HEROE, MOCK_HEROES, MOCK_RESPONSE } from 'src/app/core/mock/mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let httpService: jasmine.SpyObj<HttpService>;

    beforeEach(async () => {
        httpService = jasmine.createSpyObj('HttpService', {
            fetchHeroes: of(MOCK_RESPONSE),
        });

        await TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [ReactiveFormsModule, HttpClientTestingModule],
            providers: [FormBuilder, HttpService],
        });
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        httpService = TestBed.inject(
            HttpService
        ) as jasmine.SpyObj<HttpService>;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create searchForm with a query control', () => {
        expect(component.searchForm).toBeDefined();
        expect(component.searchForm.get('query')).toBeDefined();
    });

    it('should make HTTP request on query change', () => {
        const query = 'hul';
        component.searchForm.controls['query'].setValue(query);
        const spy = spyOn(httpService, 'fetchHeroes').and.callThrough();
        httpService.fetchHeroes(query.toLocaleLowerCase());
        expect(spy).toHaveBeenCalledWith(query.toLocaleLowerCase());
    });

    it('should select player X', () => {
        component.isNext = true;
        component.selectPlayer(MOCK_HEROE);

        expect(component.players['X']).toEqual(MOCK_HEROE);
        expect(component.isNext).toBe(false);
    });

    it('should select player O', () => {
        component.isNext = false;
        component.selectPlayer(MOCK_HEROE);

        expect(component.players['O']).toEqual(MOCK_HEROE);
    });
});
