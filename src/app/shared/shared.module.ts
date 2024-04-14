import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayersComponent } from './components/players/players.component';
import { BoardComponent } from './components/board/board.component';
import { SquaresComponent } from './components/squares/squares.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
    declarations: [SearchComponent, PlayersComponent, BoardComponent, SquaresComponent, DialogComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [SearchComponent, PlayersComponent, BoardComponent],
})
export class SharedModule {}
