import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionQuotationComponent } from './excursion-quotation.component';

describe('ExcursionQuotationComponent', () => {
  let component: ExcursionQuotationComponent;
  let fixture: ComponentFixture<ExcursionQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcursionQuotationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
