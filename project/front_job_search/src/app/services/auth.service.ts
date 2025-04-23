import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Token{
  access:string;
  refresh:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl='http://127.0.0.1:8000'
  constructor(private http: HttpClient) { }
  login(username:string,password:string):Observable<Token>{
    return this.http.post<Token>(`${this.baseUrl}/tokrn/`,{
    username,
    password,
    })
  }
  logout():void{
    localStorage.removeItem('access'),
    localStorage.removeItem('refresh')
  }

  isAuthenticated(): boolean{
    return !localStorage.getItem('access')
  }
}
