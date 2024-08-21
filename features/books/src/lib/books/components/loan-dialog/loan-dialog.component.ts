import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { BookInterface } from '../../interfaces/book.interface';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'lib-loan-dialog',
  templateUrl: './loan-dialog.component.html',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()],

  styleUrls: ['./loan-dialog.component.scss']
})
export class LoanDialogComponent {
  readonly dialogRef = inject(MatDialogRef<LoanDialogComponent>);
  readonly data = inject<BookInterface>(MAT_DIALOG_DATA);
  public form!: FormGroup;

  constructor() {
    this.form = new FormGroup({
      loanDate: new FormControl(new Date().toISOString()),
      returnDate: new FormControl()
    })
  }
}
