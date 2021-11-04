import { IEmployeeServices } from '../IServices/IEmployeeServices';
import { Employee } from '../Model/employeeDetails';

export class EmployeeServices implements IEmployeeServices {
  constructor() {}

  getEmployees(): Employee {
    throw new Error('Method not implemented.');
  }
}
