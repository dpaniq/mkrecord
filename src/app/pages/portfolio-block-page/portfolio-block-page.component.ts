import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioBlockComponent } from '../../features/portfolio-block/portfolio-block.component';
import { CategoryEnum, Portfolio, PORTFOLIO_CATEGORY_LIST } from './constants';

@Component({
  selector: 'app-portfolio-block-page',
  standalone: true,
  imports: [
    MatChipsModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    PortfolioBlockComponent,
    MatIconModule,
  ],
  templateUrl: './portfolio-block-page.component.html',
  styleUrl: './portfolio-block-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioBlockPageComponent {
  public readonly actualCategory = signal<CategoryEnum[]>([
    CategoryEnum.Commercial,
    CategoryEnum.Food,
    CategoryEnum.Fashion,
  ]);

  public readonly gridView = signal<number>(1);

  public readonly portfoliosFiltered = computed(() => {
    if (!this.actualCategory().length) {
      return Object.values(PORTFOLIO_CATEGORY_LIST).flat();
    }

    return this.actualCategory().reduce((acc, category) => {
      acc.push(...PORTFOLIO_CATEGORY_LIST[category]);
      return acc;
    }, [] as Portfolio[]);
  });

  public readonly categories = Object.values(CategoryEnum);

  changeCategory($event: MatChipListboxChange) {
    this.actualCategory.set($event.value);
  }

  onUpdateGridSize(gridSize: 1 | 2 | 3) {
    this.gridView.update(() => Number(gridSize));
  }
}
