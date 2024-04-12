import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayersComponent } from './components/players/players.component';

@NgModule({
  declarations: [SearchComponent, PlayersComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SearchComponent, PlayersComponent],
})
export class SharedModule {}
