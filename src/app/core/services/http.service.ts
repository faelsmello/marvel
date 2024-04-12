import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacters } from 'src/app/shared/interfaces/heroes';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    private ENDPOINT = 'http://gateway.marvel.com/';

    constructor(private readonly http: HttpClient) {}

    public fetchHeroes(nameStartsWith: string): Observable<ICharacters> {
        let params = new HttpParams({
            fromObject: {
                ts: 1,
                apikey: environment.publicKey,
                hash: environment.hash,
                nameStartsWith,
            },
        });

        return this.http.get<ICharacters>(
            `${this.ENDPOINT}v1/public/characters`,
            {
                params,
            }
        );
    }
}
