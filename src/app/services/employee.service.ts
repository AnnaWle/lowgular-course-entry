import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PersonModel} from "../model/person.model";
import {Observable} from "rxjs";

@Injectable()
export class EmployeeService {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._client.get<PersonModel[]>( 'assets/data/people.json');
  }
}
