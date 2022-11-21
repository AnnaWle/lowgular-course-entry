import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProjectModel} from "../model/project.model";
import {Observable} from "rxjs";


@Injectable()
export class ProjectService {
  constructor(private _client: HttpClient) {
  }

  getAll(): Observable<ProjectModel[]> {
    return this._client.get<ProjecModel[]>( 'assets/data/projects.json');
  }
}
