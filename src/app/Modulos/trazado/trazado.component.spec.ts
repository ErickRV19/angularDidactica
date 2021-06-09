import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazadoComponent } from './trazado.component';

describe('TrazadoComponent', () => {
  let component: TrazadoComponent;
  let fixture: ComponentFixture<TrazadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrazadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
