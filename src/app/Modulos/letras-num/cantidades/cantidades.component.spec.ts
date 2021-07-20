import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadesComponent } from './cantidades.component';

describe('CantidadesComponent', () => {
  let component: CantidadesComponent;
  let fixture: ComponentFixture<CantidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
