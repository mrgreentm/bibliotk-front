import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoansResponse } from './interfaces/home.interface';

@Injectable({ providedIn: 'root' })
export class HomeService {
    private httpClient = inject(HttpClient);

    getHomeData(userId: string): Observable<UserLoansResponse> {
        return this.httpClient.get<UserLoansResponse>(`http://localhost:8080/home/${userId}`);
    }

}
