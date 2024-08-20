import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequestInterface } from '../interfaces/auth.interface';
import { AuthResponseInterface } from '../interfaces/auth-response.interface';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userData = signal<UserInterface | null>(null);
  
  constructor(private httpClient: HttpClient) { }

  login(body: AuthRequestInterface): Observable<AuthResponseInterface> {
    return this.httpClient.post<AuthResponseInterface>('http://localhost:8080/auth/login', body);
  }
  getTokenFromStorage(): string {
    const token = localStorage.getItem('token');
    return token ? token : '';
  }
  setTokenOnStorage(token: string): void {
    localStorage.setItem('token', token)
  }
  logout(): void {
    localStorage.removeItem('token');
  }
}
