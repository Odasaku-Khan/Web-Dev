import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports:[CommonModule,RouterLink],
})
export class ProfileComponent implements OnInit {
  full_name = '';
  email = '';
  bio = '';
  profileImage = '';
  skillCount = 0;
  messageCount = 0;
  phone_number = '';
  birthday: string | null = null;
  status = '';
  profileId!: number;

  conversations: any[] = [];
  sidebarOpen = true;

  constructor(
    private apiService: ApiService,
    private chatService: ChatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.get<any>('users/user-profile/').subscribe(data => {
      this.full_name = data.full_name;
      this.email = data.email;
      this.bio = data.bio;
      this.profileImage = data.profile_picture;
      this.phone_number = data.phone_number;
      this.birthday = data.birthday;
      this.status = data.status;
      this.profileId = data.id;

      this.apiService.get<any[]>(`skills/user-skills/${data.id}/`).subscribe(skills => {
        this.skillCount = skills.length;
      });

      this.chatService.getMessages().subscribe(messages => {
        this.messageCount = messages.length;
      });

      this.loadConversations();
    });
  }

  loadConversations() {
    this.chatService.getConversationUsers().subscribe(data => {
      this.conversations = data;
    });
  }

  openChat(userId: number) {
    this.router.navigate(['/dashboard/chat', userId]);
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}