import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../Model/employeeDetails';

@Pipe({
  name: 'addressconsolidator',
})
export class AddressconsolidatorPipe implements PipeTransform {
  transform(value: Address, args?: any): string {
    return (
      value.AddressLine1 +
      '\n' +
      value.AddressLine2 +
      '\n' +
      value.City +
      '\n' +
      value.State +
      '\n' +
      value.Zipcode
    );
  }
}
