import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private baseUrl = 'http://127.0.0.1:8000/chat';

  constructor(private http: HttpClient) {}

  // ✅ Correct method
  getConversation(userID: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/conversation/${userID}/`);
  }

  sendMessage(receiverId: number, text: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/send/`, {
      receiver_id: receiverId,
      text
    });
  }

  getLoggedInProfileId(): number {
    return Number(localStorage.getItem('profile_id') || 0);
  }

  getConversationUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/conversations/`);
  }

  getConversations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/conversations/`);
  }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}