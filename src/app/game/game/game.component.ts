import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
    public game: Game|undefined;

    constructor(
        private route: ActivatedRoute,
        private gamesService: GamesService) {
        const id = route.snapshot.paramMap.get("id");

        if (id !== null) {
            this.game = this.gamesService.getGame(id);
            console.log(this.game);
        }
    }
}
