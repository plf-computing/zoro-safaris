import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourExcursionsComponent } from './tour-excursions.component';

describe('TourExcursionsComponent', () => {
  let component: TourExcursionsComponent;
  let fixture: ComponentFixture<TourExcursionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourExcursionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourExcursionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
