import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  fullName= '';
  skillCount=0;
  messageCount=0;
  constructor(private apiService:ApiService){}
ngOnInit(): void {
  this.apiService.get<{full_name: string,id:number}>('users/user-profile/').subscribe((data)=>{
    this.fullName=data.full_name;

  this.apiService.get<any[]>(`skills/user-skills/${data.id}/`).subscribe((skills)=>{
    this.skillCount=skills.length;
  });
  this.apiService.get<any[]>(`chat/messages/`).subscribe((messages)=>{
    this.messageCount=messages.length;
  })
  })
}

}
