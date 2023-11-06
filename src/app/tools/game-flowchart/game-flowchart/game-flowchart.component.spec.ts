import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFlowchartComponent } from './game-flowchart.component';

describe('GameFlowchartComponent', () => {
  let component: GameFlowchartComponent;
  let fixture: ComponentFixture<GameFlowchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameFlowchartComponent]
    });
    fixture = TestBed.createComponent(GameFlowchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
