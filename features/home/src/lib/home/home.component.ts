import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './data-access/home.service';
import { AuthService } from '@bibliotk/features/auth';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private homeService = inject(HomeService);
  private authService = inject(AuthService);
  public homeData$ = this.homeService.getHomeData(this.authService.getUserIdFromStorage());
}
