import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeHeroesComponent } from './components/home-heroes/home-heroes.component';
import { BoardComponent } from 'src/app/shared/components/board/board.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children: [
        { path: '', component: HomeHeroesComponent },
        { path: 'game', component: BoardComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
