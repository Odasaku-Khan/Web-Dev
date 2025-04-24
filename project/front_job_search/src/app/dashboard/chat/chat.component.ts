import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chat',
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages:any[]=[];
  newMessage=''
  userId!:number;
  constructor(private chatservise:ChatService,private route:ActivatedRoute){
    this.route.params.subscribe(params=>{
      this.userId=params['id'];
      this.loadMessages();
    }
    )
  }
  loadMessages(){
    this.chatservise.getConservation(this.userId).subscribe(data=>{
      this.messages=data
    });
  }
  sendMessage(){
    if(this.newMessage.trim()){
      this.chatservise.sendMessage(this.userId,this.newMessage).subscribe(res=>{
        this.messages.push(res);
        this.newMessage=''
      })
    }
  }
}
