import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tip4Component } from './tip-4.component';

describe('Tip4Component', () => {
  let component: Tip4Component;
  let fixture: ComponentFixture<Tip4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tip4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tip4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
