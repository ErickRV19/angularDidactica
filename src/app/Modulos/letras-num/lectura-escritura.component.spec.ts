import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaEscrituraComponent } from './lectura-escritura.component';

describe('LecturaEscrituraComponent', () => {
  let component: LecturaEscrituraComponent;
  let fixture: ComponentFixture<LecturaEscrituraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturaEscrituraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturaEscrituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
