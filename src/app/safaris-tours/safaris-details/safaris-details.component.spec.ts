import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafarisDetailsComponent } from './safaris-details.component';

describe('SafarisDetailsComponent', () => {
  let component: SafarisDetailsComponent;
  let fixture: ComponentFixture<SafarisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafarisDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafarisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
