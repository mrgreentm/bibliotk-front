import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dueDate',
  standalone: true
})
export class DueDatePipe implements PipeTransform {

 
  transform(dateArray: [number, number, number]): boolean {
    const [year, month, day] = dateArray;
    const dateToCompare = new Date(year, month - 1, day);
    const today = new Date();

    dateToCompare.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return dateToCompare > today;
  }


}
