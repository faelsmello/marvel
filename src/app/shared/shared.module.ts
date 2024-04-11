import { NgModule } from "@angular/core";
import { SearchComponent } from "./components/search/search.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchComponent
  ]
})
export class SharedModule { }
