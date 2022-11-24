import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonModel } from '../model/person.model';
import { CreateEmployeeModel } from '../model/create-employee.model';
import {ApiResponse} from "./api.response";
import { EmployeeResponse } from './employee.response';


@Injectable()
export class EmployeeService {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._client.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response: ApiResponse<EmployeeResponse[]>): PersonModel[] => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            personalNumber: employeeResponse.id,
            img: employeeResponse.profile_image,
            mail: employeeResponse.employee_name + "@lowgular.io",
            age: employeeResponse.employee_age,
            salary: employeeResponse.employee_salary,
          }
        });
      }));
  }

  create(employee: CreateEmployeeModel): Observable<void> {
    return this._client.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ => void 0));
  }

  delete(id: string): Observable<void> {
    return this._client.delete('https://dummy.restapiexample.com/api/v1/delete/' + id).pipe(map(_ => void 0));
  }
}
