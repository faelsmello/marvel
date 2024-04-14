import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { ICharacters } from 'src/app/shared/interfaces/heroes';
import { environment } from 'src/environments/environment.development';
import { MOCK_RESPONSE } from '../mock/mock';

const ENDPOINT = 'http://gateway.marvel.com/';

describe('HttpService', () => {
    let service: HttpService;
    let httpTestingController: HttpTestingController;

    afterEach(() => {
        httpTestingController.verify();
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(HttpService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch heroes', () => {
        const nameStartsWith = 'Spider';

        service
            .fetchHeroes(nameStartsWith)
            .subscribe((characters: ICharacters) => {
                expect(characters).toEqual(MOCK_RESPONSE);
            });

        const request = httpTestingController.expectOne(
            `${ENDPOINT}v1/public/characters?ts=1&apikey=${environment.publicKey}&hash=${environment.hash}&nameStartsWith=${nameStartsWith}`
        );

        expect(request.request.method).toBe('GET');
        expect(request.request.params.get('ts')).toEqual('1');
        expect(request.request.params.get('apikey')).toEqual(
            environment.publicKey
        );
        expect(request.request.params.get('hash')).toEqual(environment.hash);
        expect(request.request.params.get('nameStartsWith')).toEqual(
            nameStartsWith
        );

        request.flush(MOCK_RESPONSE);
    });
});
