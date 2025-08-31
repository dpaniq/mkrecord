import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { VideoDialogComponent } from '../../core/video-dialog.component';
import { Portfolio } from '../../pages/portfolio-page.component';

@Component({
  selector: 'app-portfolio-block',
  imports: [
    CommonModule,
    MatIconModule,
    NgOptimizedImage,
    MatButtonToggleModule,
    MatCheckboxModule,
  ],
  providers: [],
  templateUrl: './portfolio-block.component.html',
  styleUrl: './portfolio-block.component.css',
})
export class PortfolioBlockComponent {
  private readonly dialog = inject(MatDialog);

  public readonly portfolios = input.required<Portfolio[]>();
  public readonly gridView = input.required<string>();

  openDialog(portfolio: Portfolio): void {
    const dialogRef = this.dialog.open(VideoDialogComponent, {
      data: {
        // url: 'GST8we5uABo',
        ...portfolio,
      },
      minWidth: 'max-content',
      maxHeight: 'max-content',
      // width: 640,
      // height: 390,
      hasBackdrop: true,
      backdropClass: 'backdrop-dialog',
      enterAnimationDuration: 200,
      exitAnimationDuration: 200,
      closeOnNavigation: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
