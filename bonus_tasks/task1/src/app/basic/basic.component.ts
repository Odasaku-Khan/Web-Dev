// import { Component,Input } from '@angular/core';

// @Component({
//   template: ' ',
// })
// export class BasicComponent {
//   @Input() title!: string;
//   @Input() description!: string;
//   @Input() category!:string;
//   @Input() status!: string;
//   @Input() deadline!: Date;
// }
// //Yeah Im that lazy that I renamed file basic instead of BaseTaskComponent
// by googlinf i find that actually you can do interface in angular and typescript support it either
import { Component, Input } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  status: 'pending' | 'completed';
  deadline: Date;
}
@Component({
  selector: 'app-base-task',
  template: '', 
})
export class BaseTaskComponent {
  @Input() task!: Task;
}