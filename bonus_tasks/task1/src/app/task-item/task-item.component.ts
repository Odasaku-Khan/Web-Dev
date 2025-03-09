import { Component, EventEmitter, Output } from '@angular/core';
import { BaseTaskComponent } from '../basic/basic.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  template: `
    <div *ngIf="task">
      <h3>{{ task.title }}</h3>
      <p>Category: {{ task.category }}</p>
      <p>Status: {{ task.status }}</p>
      <p>Deadline: {{ task.deadline | date }}</p>
      <button (click)="markCompleted()">Mark as Completed</button>
    </div>
  `,
})
export class TaskItemComponent extends BaseTaskComponent {
  @Output() completed = new EventEmitter<number>();

  markCompleted() {
    if (this.task) {
      this.completed.emit(this.task.id);
    }
  }
}