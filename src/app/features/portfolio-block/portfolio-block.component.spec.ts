import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBlockComponent } from './portfolio-block.component';

describe('PortfolioBlockComponent', () => {
  let component: PortfolioBlockComponent;
  let fixture: ComponentFixture<PortfolioBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
