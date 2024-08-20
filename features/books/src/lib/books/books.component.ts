import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './data-access/books.service';

@Component({
  selector: 'lib-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent implements OnInit{
  bookService = inject(BooksService);

  ngOnInit(): void {
      this.bookService.getAllBooks().subscribe((res)=>{
        console.log(res)
      })
  }
}
