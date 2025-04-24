import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private baseUrl='http://127.0.0.1:8000/chat';
  constructor(private http:HttpClient) { }
  getConservation(userID:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/conservation/${userID}/`)
  }
  sendMessage(receiverId:number,text:string):Observable<any>{
    return this.http.post(`${this.baseUrl}/send/`,{
    receiverId:receiverId,
    text
    }
  )
  }
}
