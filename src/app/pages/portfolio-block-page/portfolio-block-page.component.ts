import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioBlockComponent } from '../../features/portfolio-block/portfolio-block.component';
import { CategoryEnum, PORTFOLIO_CATEGORY_LIST } from './constants';

@Component({
  selector: 'app-portfolio-block-page',
  standalone: true,
  imports: [
    MatChipsModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    PortfolioBlockComponent,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './portfolio-block-page.component.html',
  styleUrl: './portfolio-block-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioBlockPageComponent {
  public readonly actualCategory = signal<CategoryEnum>(
    CategoryEnum.Commercial,
  );

  public readonly gridView = signal<string>('3');

  public readonly portfoliosFiltered = computed(() => {
    return PORTFOLIO_CATEGORY_LIST[this.actualCategory()];
  });

  public readonly categories = Object.values(CategoryEnum);

  changeCategory(value: CategoryEnum) {
    this.actualCategory.set(value);
  }

  onUpdateGridSize(gridSize: '2' | '3') {
    this.gridView.update(() => gridSize);
  }
}
