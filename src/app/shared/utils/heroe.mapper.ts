import { ICharacters } from '../interfaces/heroes';
import { Heroe } from './heroe';

export const HeroeMapper = ({
    data: { results },
}: ICharacters): Array<Heroe> => {
    return results.map((result) => new Heroe(result));
};
