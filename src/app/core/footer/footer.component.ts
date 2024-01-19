import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from '../../services/icon.service';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [IconService],
})
export class FooterComponent {
  #iconService = inject(IconService);
}
