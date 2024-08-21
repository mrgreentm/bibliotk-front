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
                "userId": this.authService.getUserIdFromStorage(),
                "bookId": book.id,
                "loanDate": this.formatIsoDate(dates.loanDate),
                "returnDate": this.formatIsoDate(dates.returnDate)
            }
        )
    }
    private formatIsoDate(isoDateString: string): string {
        const date = new Date(isoDateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
      

}
