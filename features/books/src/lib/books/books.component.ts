import { Component, inject } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { BooksService } from './data-access/books.service';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { StatusEnum } from './enums/status.enum';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog'
import { LoanDialogComponent } from './components/loan-dialog/loan-dialog.component';
import { BookInterface } from './interfaces/book.interface';
import { concatMap, filter, of, tap } from 'rxjs';
@Component({
  selector: 'lib-books',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatButtonModule, NgClass],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {
  bookService = inject(BooksService);
  books$ = this.bookService.getAllBooks();
  statuses = StatusEnum;
  readonly dialog = inject(MatDialog);

  openDialog(book: BookInterface): void {
    const dialogRef = this.dialog.open(LoanDialogComponent, {
      width: '300px',
      height: '300px',
      exitAnimationDuration: '3ms',
      enterAnimationDuration: '3ms',
      data: book
    });
    dialogRef.afterClosed()
      .pipe(filter((res) => res),
        concatMap((res) => this.bookService.createLoan(book, res)),
        concatMap(() => this.bookService.getAllBooks()),
        tap((books: BookInterface[]) => this.books$ = of(books))
      )
      .subscribe();
  }

}
