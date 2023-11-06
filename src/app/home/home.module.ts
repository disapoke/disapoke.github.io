import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { GameCardComponent } from './game-card/game-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    GameCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class HomeModule { }
