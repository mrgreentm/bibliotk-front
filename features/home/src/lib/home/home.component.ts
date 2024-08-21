import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './data-access/home.service';
import { AuthService } from '@bibliotk/features/auth';
import { MatCardModule } from '@angular/material/card';
import { ConvertDataPipe } from './pipes/date-converter/convert-data.pipe';
import { DueDatePipe } from './pipes/due-date/due-date.pipe';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, ConvertDataPipe, DueDatePipe, MatChipsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private homeService = inject(HomeService);
  private authService = inject(AuthService);
  public homeData$ = this.homeService.getHomeData(this.authService.getUserIdFromStorage());
}
