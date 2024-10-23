import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tip5Component } from './tip-5.component';

describe('Tip5Component', () => {
  let component: Tip5Component;
  let fixture: ComponentFixture<Tip5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tip5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tip5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
