import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    finalize,
    map,
    Observable,
    of,
    switchMap,
    tap,
} from 'rxjs';
import { IResult } from '../../interfaces/heroes';
import { HeroeMapper } from '../../utils/heroe.mapper';
import { Heroe } from '../../utils/heroe';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    @Input() public label!: string;
    @Input() public ariaLabel!: string;
    @Input() public required: boolean = false;
    @Output() public eventEmitterPlayers: EventEmitter<Record<string, Heroe>> =
        new EventEmitter();

    public searchForm: FormGroup;
    public heroes: Array<Heroe> = [];
    public players: Record<string, Heroe> = {};
    public isLoading: boolean = false;
    public hiddenDropdown = true;
    public isNext = true;

    constructor(
        private _formBuilder: FormBuilder,
        private readonly httpService: HttpService
    ) {
        this.searchForm = this._formBuilder.group({
            query: new FormControl(null),
        });

        this.searchForm.controls['query'].valueChanges
            .pipe(
                tap(() => {
                    this.isLoading = true;
                    this.hiddenDropdown = false;
                }),
                debounceTime(300),
                distinctUntilChanged(),
                filter((value) => !!value),
                switchMap((value) =>
                    this.httpService.fetchHeroes((value as string).toLocaleLowerCase()).pipe(
                        finalize(() => (this.isLoading = false)),
                        map(HeroeMapper)
                    )
                )
            )
            .subscribe(
                (res) => (this.heroes = res),
                (err) => (this.heroes = [])
            );
    }

    public selectPlayer(heroi: Heroe): void {
        const typePlayer = this.isNext ? 'X' : 'O';
        this.players[typePlayer] = heroi;

        this.resetHeroi();
        this.isNext = !this.isNext;
        this.eventEmitterPlayers.emit(this.players);
    }

    private resetHeroi(): void {
        this.searchForm.controls['query'].patchValue('');
        this.isLoading = false;
        this.hiddenDropdown = true;
    }
}
