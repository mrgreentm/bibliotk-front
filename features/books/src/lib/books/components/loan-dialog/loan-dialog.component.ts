import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BookInterface } from '../../interfaces/book.interface';

@Component({
  selector: 'lib-loan-dialog',
  templateUrl: './loan-dialog.component.html',
  standalone: true,
  imports: [    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
],
  styleUrls: ['./loan-dialog.component.scss']
})
export class LoanDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<LoanDialogComponent>);
  readonly data = inject<BookInterface>(MAT_DIALOG_DATA);

  ngOnInit() {
    console.log(this.data)
  }
}
