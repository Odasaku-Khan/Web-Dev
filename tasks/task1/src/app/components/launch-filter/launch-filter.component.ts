import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-launch-filter',
  imports: [],
  template:`<button (click)="onClick()">Filter of Succesfull Launches</button>`,
})
export class LaunchFilterComponent {
  @Output() filterSuccess =new EventEmitter<void>();
  onClick(){
    this.filterSuccess.emit();
  }
}
