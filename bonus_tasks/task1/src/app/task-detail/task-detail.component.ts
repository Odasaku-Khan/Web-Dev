import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../basic/basic.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  imports:[CommonModule],
  template: `
    <div *ngIf="task">
      <h2>{{ task.title }}</h2>
      <p>Description: {{ task.description }}</p>
      <p>Category: {{ task.category }}</p>
      <p>Status: {{ task.status }}</p>
      <p>Deadline: {{ task.deadline | date }}</p>
    </div>
    <button (click)="goBack()">Back to Tasks</button>
  `,
})
export class TaskDetailComponent implements OnInit {
  task: Task | undefined;
  tasks: Task[] = [
    { id: 1, title: 'Complete Report', description: 'Finish the monthly report', category: 'Work', status: 'pending', deadline: new Date('2024-12-31') },
    { id: 2, title: 'Buy Groceries', description: 'Get milk, eggs, and bread', category: 'Personal', status: 'pending', deadline: new Date('2024-07-15') },
    { id: 3, title: 'Study Angular', description: 'Learn about routing', category: 'Study', status: 'pending', deadline: new Date('2024-08-20') },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const taskId = +this.route.snapshot.paramMap.get('id')!;
    this.task = this.tasks.find(task => task.id === taskId);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
