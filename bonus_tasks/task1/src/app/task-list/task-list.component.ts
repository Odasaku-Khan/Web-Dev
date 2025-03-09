import { Component, OnInit } from '@angular/core';
import { Task } from '../basic/basic.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskItemComponent],
  template: `
    <h2>Task List</h2>
    <div *ngFor="let task of tasks">
      <app-task-item [task]="task" (completed)="onTaskCompleted($event)" (click)="goToDetails(task.id)"></app-task-item>
    </div>
  `,
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    { id: 1, title: 'Complete Report', description: 'Finish the monthly report', category: 'Work', status: 'pending', deadline: new Date('2024-12-31') },
    { id: 2, title: 'Buy Groceries', description: 'Get milk, eggs, and bread', category: 'Personal', status: 'pending', deadline: new Date('2024-07-15') },
    { id: 3, title: 'Study Angular', description: 'Learn about routing', category: 'Study', status: 'pending', deadline: new Date('2024-08-20') },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onTaskCompleted(taskId: number) {
    this.tasks = this.tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status: 'completed' };
      }
      return task;
    });
  }

  goToDetails(taskId: number) {
    this.router.navigate(['/task', taskId]);
  }
}