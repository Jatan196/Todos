import { Component ,Input ,EventEmitter, Output} from '@angular/core';
import { Todo } from '../Todo';
import { FormsModule } from '@angular/forms';
 import { CommonModule } from '@angular/common';

import { TodoButtonComponent } from '../todo-button/todo-button.component';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule,CommonModule,TodoButtonComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent {
  @Input() todo:Todo;
//  @Input() dtodo:doneTodos;
  @Input() i:number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  onClick(todo:Todo){
    this.todoDelete.emit(todo) 
     console.log("Click is working")
  }
  onCheckBoxClick(todo:Todo){
    console.log(todo);
    this.todoCheckBox.emit(todo)
    console.log(todo);
  }
}
