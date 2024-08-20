import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './data-access/books.service';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'lib-books',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {
  bookService = inject(BooksService);
  books$ = this.bookService.getAllBooks();
}
