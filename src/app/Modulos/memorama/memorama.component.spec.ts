import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoramaComponent } from './memorama.component';

describe('MemoramaComponent', () => {
  let component: MemoramaComponent;
  let fixture: ComponentFixture<MemoramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
