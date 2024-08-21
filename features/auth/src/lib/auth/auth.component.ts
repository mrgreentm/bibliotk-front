// eslint-disable-next-line @nx/enforce-module-boundaries
import { AlertService } from './../../../../../src/app/services/alert.service';
import { Component, inject, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './data-access/auth.service';
import { take } from 'rxjs';
import { AuthResponseInterface } from './interfaces/auth-response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-auth',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatRadioModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule],
  providers: [AuthService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  form!: FormGroup;
  router: Router = inject(Router);
  alertService = inject(AlertService);
  readonly checked = model(false);

  constructor(private authService: AuthService) {
    this.initializeForm();
  }

  login(): void {
    this.authService.login(this.form.value)
      .pipe(take(1))
      .subscribe({
        next: (res: AuthResponseInterface) => this.verifyAuthentication(res),
        error: (err) => this.verifyError(err)
      })
  }

  private verifyAuthentication(data: AuthResponseInterface): void {
    if (data.token) this.saveAuthenticationData(data);
  }

  private verifyError(error: Error) {
    if (error) this.sendErrorMessage();
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', Validators.required)
    });
  }
  private saveAuthenticationData(data: AuthResponseInterface): void {
    this.authService.setTokenOnStorage(data.token, data.userId);
    this.router.navigateByUrl('/home')
  }
  private sendErrorMessage() {
    this.alertService.sendMessage('Ocorreu um erro ao realizar a autenticação.');
  }
}
