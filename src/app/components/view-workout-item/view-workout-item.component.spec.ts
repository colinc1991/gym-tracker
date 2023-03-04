import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkoutItemComponent } from './view-workout-item.component';

describe('ViewWorkoutItemComponent', () => {
  let component: ViewWorkoutItemComponent;
  let fixture: ComponentFixture<ViewWorkoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWorkoutItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWorkoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
