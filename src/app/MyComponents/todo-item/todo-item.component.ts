import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo:any;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  onClick(){
    this.todoDelete.emit(this.todo);
    console.log('OnClick Triggered');
  }
  onCheckBoxClick(todo:any){
    console.log(todo);
    this.todoCheckBox.emit(todo);
    console.log(todo);
  }
}
