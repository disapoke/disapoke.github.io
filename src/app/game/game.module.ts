import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { RunCardComponent } from './run-card/run-card.component';
import { RunCardLargeComponent } from './run-card-large/run-card-large.component';



@NgModule({
  declarations: [
    GameComponent,
    RunCardComponent,
    RunCardLargeComponent
],
  imports: [
    CommonModule,
  ]
})
export class GameModule { }
