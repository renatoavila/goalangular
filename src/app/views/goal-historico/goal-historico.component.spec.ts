import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalHistoricoComponent } from './goal-historico.component';

describe('GoalHistoricoComponent', () => {
  let component: GoalHistoricoComponent;
  let fixture: ComponentFixture<GoalHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
