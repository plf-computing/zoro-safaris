import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafarisPageComponent } from './safaris-page.component';

describe('SafarisPageComponent', () => {
  let component: SafarisPageComponent;
  let fixture: ComponentFixture<SafarisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafarisPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafarisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
