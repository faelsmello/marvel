import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './components/heroes/heroes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeHeroesComponent } from './components/home-heroes/home-heroes.component';

@NgModule({
  declarations: [HeroesComponent, HomeHeroesComponent],
  imports: [CommonModule, HeroesRoutingModule, SharedModule],
})
export class HeroesModule {}
