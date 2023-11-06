import { Injectable } from '@angular/core';

import { Game } from '../models/game';
import { GAMES, GameJson } from '../../assets/data/games';



@Injectable({
    providedIn: 'root'
})
export class GamesService {
    private games: Game[];
    // private gameFlowcharts: GameFlowchart[];

    constructor() {
        this.games = GAMES.map((gameJSON: GameJson) => this.convertJSON(gameJSON))
    }

    convertJSON(gameJSON: GameJson): Game {
        return new Game(gameJSON.id, gameJSON.name, gameJSON.gen, gameJSON.isRomHack);
    }

    getAllGames(): Game[] {
        return this.games;
    }

    getGame(id: string): Game|undefined {
        return this.games.find((game) => game.id === id);
    }
}
