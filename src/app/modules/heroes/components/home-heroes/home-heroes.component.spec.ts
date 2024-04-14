import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroesComponent } from './home-heroes.component';
import { GameService } from 'src/app/core/services/game.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MOCK_EVENT_PLAYER } from 'src/app/core/mock/mock';

describe('HomeHeroesComponent', () => {
    let component: HomeHeroesComponent;
    let fixture: ComponentFixture<HomeHeroesComponent>;
    let gameService: jasmine.SpyObj<GameService>;
    let router: Router;

    beforeEach(async () => {
        const gameServiceSpy = jasmine.createSpyObj('GameService', [
            'updatePlayers',
        ]);
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                SharedModule,
                HttpClientTestingModule,
            ],
            declarations: [HomeHeroesComponent],
            providers: [{ provide: GameService, useValue: gameServiceSpy }],
        });
        fixture = TestBed.createComponent(HomeHeroesComponent);
        component = fixture.componentInstance;
        gameService = TestBed.inject(
            GameService
        ) as jasmine.SpyObj<GameService>;
        router = TestBed.inject(Router);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should update players and change searchHeroes on eventPlayers', () => {
        component.eventPlayers(MOCK_EVENT_PLAYER);

        expect(component.players.length).toEqual(2);
        expect(component.searchHeroes).toEqual('Selecionar Héroi O');
        expect(gameService.updatePlayers).toHaveBeenCalledWith(
            component.players
        );
    });

    it('should navigate to "game" on goToPlay()', () => {
        const navigateSpy = spyOn(router, 'navigate').and.stub();

        component.goToPlay();

        expect(navigateSpy).toHaveBeenCalledWith(['game']);
    });
});
