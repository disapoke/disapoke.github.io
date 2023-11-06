import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunCardLargeComponent } from './run-card-large.component';

describe('RunCardLargeComponent', () => {
  let component: RunCardLargeComponent;
  let fixture: ComponentFixture<RunCardLargeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunCardLargeComponent]
    });
    fixture = TestBed.createComponent(RunCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
