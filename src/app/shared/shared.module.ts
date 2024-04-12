import { NgModule } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SearchComponent],
})
export class SharedModule {}
