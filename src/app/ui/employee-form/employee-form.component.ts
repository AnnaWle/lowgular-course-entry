import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl( null, [Validators.required]),
    age: new FormControl( null, [Validators.min(18), Validators.required]),
    salary: new FormControl( null, [Validators.required]),
  });

  constructor(private _employeeService: EmployeeService) {
  }

  onFormSubmitted(form: CreateEmployeeModel) {
    this._employeeService.create({name: form.name, age: form.age, salary: form.salary}).subscribe();
  }

onButtonClicked(form: {name:string, age:number, salary:number}) {
  alert('User was successfully added to the database. Name: ' + form.name + ', Age: ' + form.age + ', Salary: ' + form.salary)
}

}
