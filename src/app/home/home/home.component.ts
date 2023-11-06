import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public games: Game[] = [];

    constructor(private gamesService: GamesService) {
    }

    public ngOnInit(): void {
        this.games = this.gamesService.getAllGames();
    }
}
