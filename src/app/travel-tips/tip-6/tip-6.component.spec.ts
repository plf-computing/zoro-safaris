import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tip6Component } from './tip-6.component';

describe('Tip6Component', () => {
  let component: Tip6Component;
  let fixture: ComponentFixture<Tip6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tip6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tip6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
