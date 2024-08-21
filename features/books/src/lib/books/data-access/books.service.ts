import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookInterface } from '../interfaces/book.interface';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@bibliotk/features/auth';

@Injectable({ providedIn: 'root' })
export class BooksService {
    http = inject(HttpClient);
    authService = inject(AuthService)
    getAllBooks(): Observable<BookInterface[]> {
        return this.http.get<BookInterface[]>('http://localhost:8080/books');
    }
    createLoan(book: BookInterface, dates: {returnDate: string, loanDate: string}): Observable<void> {
        return this.http.post<void>('http://localhost:8080/loans',
            {
                "userId": 2,
                "bookId": book.id,
                "loanDate":dates.loanDate,
                "returnDate": dates.returnDate
            }
        )
    }

}
