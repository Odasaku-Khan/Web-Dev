import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-messages',
  imports: [CommonModule,FormsModule],
  templateUrl: './messagescomponent.component.html',
  styleUrls: ['./messagescomponent.component.css'],
})
export class MessagesComponent implements OnInit {
  users: any[] = [];
  selectedUser: any = null;
  messages: any[] = [];
  newMessage = '';
  myProfileId!: number;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.myProfileId = Number(localStorage.getItem('profile_id'));

    // Load recent conversation users
    this.chatService.getConversationUsers().subscribe((users) => {
      this.users = users;
    });
  }

  selectUser(user: any) {
    this.selectedUser = user;

    this.chatService.getConversation(user.id).subscribe((msgs) => {
      this.messages = msgs.map((msg: any) => ({
        ...msg,
        isMine: msg.sender.id === this.myProfileId,
      }));
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.selectedUser.id, this.newMessage).subscribe((msg) => {
        msg.isMine = true;
        this.messages.push(msg);
        this.newMessage = '';
      });
    }
  }
}