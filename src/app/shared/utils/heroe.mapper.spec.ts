import {
    MOCK_HEROES,
    MOCK_RESPONSE,
    MOCK_RESPONSE_EMPTY,
} from 'src/app/core/mock/mock';
import { HeroeMapper } from './heroe.mapper';
import { Heroe } from './heroe';
import { ICharacters } from '../interfaces/heroes';

describe('HeroeMapper', () => {
    it('should map characters to heroes', () => {
        const expectedHeroes: Heroe[] = [
            new Heroe(MOCK_RESPONSE.data.results[0]),
        ];

        expect(HeroeMapper(MOCK_RESPONSE)).toEqual(expectedHeroes);
    });

    it('should handle empty results', () => {
        expect(HeroeMapper(MOCK_RESPONSE_EMPTY)).toEqual([]);
    });
});
