import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Letras2Component } from './letras2.component';

describe('Letras2Component', () => {
  let component: Letras2Component;
  let fixture: ComponentFixture<Letras2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Letras2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Letras2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
