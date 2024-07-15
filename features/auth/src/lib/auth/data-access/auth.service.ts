import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequestInterface } from '../interfaces/auth.interface';
import { AuthResponseInterface } from '../interfaces/auth-response.interface';

@Injectable()
export class AuthService {
    constructor(private httpClient: HttpClient) { }
    login(body: AuthRequestInterface): Observable<AuthResponseInterface> {
        return this.httpClient.post<AuthResponseInterface>('http://localhost:8080/auth/login', body)
    }
}
