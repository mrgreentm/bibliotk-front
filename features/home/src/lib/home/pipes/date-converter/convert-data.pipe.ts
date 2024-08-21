import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertData',
  standalone: true
})
export class ConvertDataPipe implements PipeTransform {

  transform(dateArray: [number, number, number]): string {
    const [year, month, day] = dateArray;
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');
    return `${formattedDay}/${formattedMonth}/${year}`;
  }


}
