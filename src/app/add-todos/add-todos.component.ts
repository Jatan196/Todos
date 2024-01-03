import { Component,Output,EventEmitter} from '@angular/core';
import { Todo } from '../Todo';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-todos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todos.component.html',
  styleUrl: './add-todos.component.css'
})

export class AddTodosComponent {
    title:any
    desc: any
  @Output() addTodoEvent: EventEmitter<Todo> = new EventEmitter();

   addTodo(){
     const record={
      sno:3,
          title:this.title,
          desc:this.desc,
          active:true
     }
    this.addTodoEvent.emit(record);
    console.log("submit button working")
   }
}
