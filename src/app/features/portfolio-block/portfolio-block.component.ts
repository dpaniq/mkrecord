import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Portfolio } from '../../pages/portfolio-block-page/constants';

@Component({
  selector: 'app-portfolio-block',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    NgOptimizedImage,
    MatButtonToggleModule,
    MatCheckboxModule,
  ],
  templateUrl: './portfolio-block.component.html',
  styleUrl: './portfolio-block.component.css',
})
export class PortfolioBlockComponent {
  public readonly portfolios = input.required<Portfolio[]>();
  public readonly gridView = input.required<string>();
}
