import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    @Input() public label!: string;
    @Input() public ariaLabel!: string;
    @Input() public required: boolean = false;

    public searchForm!: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.searchForm = this._formBuilder.group({
            query: null,
        });
    }
}
