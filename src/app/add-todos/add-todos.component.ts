import { Component,Output,EventEmitter, ViewChild} from '@angular/core';
import { Todo } from '../Todo';
import { FormsModule, NgForm } from '@angular/forms';


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
  @ViewChild('myForm', { static: false }) myForm!: NgForm;
  index:number;
   

  addTodo(){
    // Handle form submission logic here
    let record={
      sno:this.index,
          title:this.title,
          desc:this.desc,
          active:true
     }
    this.index=this.index  +1;
    this.addTodoEvent.emit(record);
    console.log("submit button working")
    
    this.myForm.reset();
    // Reset the form after submission
    this.myForm.resetForm();
  }

}
