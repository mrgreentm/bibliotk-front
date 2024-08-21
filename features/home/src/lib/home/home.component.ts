import { BooksService } from '@bibliotk/features/books';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './data-access/home.service';
import { AuthService } from '@bibliotk/features/auth';
import { MatCardModule } from '@angular/material/card';
import { ConvertDataPipe } from './pipes/date-converter/convert-data.pipe';
import { DueDatePipe } from './pipes/due-date/due-date.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { Observable, switchMap, take } from 'rxjs';
import { UserLoansResponse } from './interfaces/home.interface';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, ConvertDataPipe, DueDatePipe, MatChipsModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private homeService = inject(HomeService);
  private authService = inject(AuthService);
  private bookService = inject(BooksService);
  public homeData$ = this.getHomeData();

  deleteLoan(loanId: string): void {
    this.bookService.deleteLoan(loanId)
      .pipe(
        take(1),
        switchMap(() => this.homeData$ = this.getHomeData()))
      .subscribe()
  }
  getHomeData(): Observable<UserLoansResponse> {
    return this.homeService.getHomeData(this.authService.getUserIdFromStorage())
  }
}
