import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBlockPageComponent } from './portfolio-block-page.component';

describe('PortfolioBlockPageComponent', () => {
  let component: PortfolioBlockPageComponent;
  let fixture: ComponentFixture<PortfolioBlockPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioBlockPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioBlockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
