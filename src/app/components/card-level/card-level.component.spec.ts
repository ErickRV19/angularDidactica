import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLevelComponent } from './card-level.component';

describe('CardLevelComponent', () => {
  let component: CardLevelComponent;
  let fixture: ComponentFixture<CardLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
