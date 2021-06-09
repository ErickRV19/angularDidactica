import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonidoComponent } from './sonido.component';

describe('SonidoComponent', () => {
  let component: SonidoComponent;
  let fixture: ComponentFixture<SonidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
