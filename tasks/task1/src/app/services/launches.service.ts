import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaunchesInfo } from '../models/launches.models';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  constructor(
    private http: HttpClient
  ) {}
  getAllLaunches(): Observable<LaunchesInfo[]>{
    return this.http.get<LaunchesInfo[]>('https://api.spacexdata.com/v3/launches');
  }

}
