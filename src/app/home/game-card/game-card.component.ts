import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {

    @Input() game!: Game;
    @Input() attempts: number = -1;
    @Input() wins: number = -1;

    constructor(private router: Router) {
    }

    goToGamePage() {
        this.router.navigate([`${this.game.id}`]);
    }
}
