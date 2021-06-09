import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoletrasComponent } from './juegoletras.component';

describe('JuegoletrasComponent', () => {
  let component: JuegoletrasComponent;
  let fixture: ComponentFixture<JuegoletrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoletrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoletrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
