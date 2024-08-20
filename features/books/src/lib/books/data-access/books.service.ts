import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookInterface } from '../interfaces/book.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class BooksService {
    http = inject(HttpClient);
    getAllBooks(): Observable<BookInterface[]> {
        return this.http.get<BookInterface[]>('http://localhost:8080/books');
    }

}
