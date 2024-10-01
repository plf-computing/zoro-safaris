import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafarisToursComponent } from './safaris-tours.component';

describe('SafarisToursComponent', () => {
  let component: SafarisToursComponent;
  let fixture: ComponentFixture<SafarisToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafarisToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafarisToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
