import { Injectable } from '@angular/core';

interface GameData { id: string, attempts: number, wins: number };

@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    constructor() {
        if (localStorage.getItem("user-data-exists") === null) {
            this.initializeUserData();
        }
    }

    private initializeUserData() {
        localStorage.clear();
        localStorage.setItem("user-data-exists", "true");
    }

    private initializeGameInfo(gameId: string) {
        const gameInfo = {
            "id": gameId,
            "current_attempt": null,
            "old_attempts": []
        };
        localStorage.setItem(`game_info_${gameId}`, JSON.stringify(gameInfo));
    }

    private createRun(gameId: string) {
        if (localStorage.getItem(`game_info_${gameId}`) === null) {
            this.initializeGameInfo(gameId);
        }
        const gameInfoJSON = localStorage.getItem(`game_info_${gameId}`);
    }
}
