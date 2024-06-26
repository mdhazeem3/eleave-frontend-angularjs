import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  standalone: true,
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: number | string): string {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'dd/MM/yyyy') || '';
  }
}