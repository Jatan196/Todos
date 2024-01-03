
import { Component ,Input ,EventEmitter, Output} from '@angular/core';
import { Todo } from '../Todo';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent {
  @Input() todo:Todo;
  @Input() i:number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  onClick(){
    this.todoDelete.emit(this.todo) 
     console.log("Click is working")
  }
  onCheckBoxClick(todo:Todo){
    console.log(todo);
    this.todoCheckBox.emit(todo)
    console.log(todo);
  }
}
