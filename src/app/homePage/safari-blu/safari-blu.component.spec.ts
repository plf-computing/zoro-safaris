import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafariBluComponent } from './safari-blu.component';

describe('SafariBluComponent', () => {
  let component: SafariBluComponent;
  let fixture: ComponentFixture<SafariBluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafariBluComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafariBluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
