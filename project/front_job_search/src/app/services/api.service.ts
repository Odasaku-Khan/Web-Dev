import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl='http://127.0.0.1:8000';

  constructor(private http:HttpClient) { }
  get<T>(endpoints:string):Observable<T>{
    return this.http.get<T>(`${this.baseUrl}/${endpoints}`)
  }
  post<T>(endpoints:string,data:any):Observable<T>{
    return this.http.post<T>(`${this.baseUrl}/${endpoints}`,data)
  }
  put<T>(endpoints:string,data:any):Observable<T>{
    return this.http.put<T>(`${this.baseUrl}/${endpoints}`,data)
  }
  delete<T>(endpoints:string):Observable<T>{
    return this.http.delete<T>(`${this.baseUrl}/${endpoints}`)
  }
  
}
