import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tip2Component } from './tip-2.component';

describe('Tip2Component', () => {
  let component: Tip2Component;
  let fixture: ComponentFixture<Tip2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tip2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tip2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
