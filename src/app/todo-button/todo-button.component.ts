import { Component } from '@angular/core';
import { Todo } from '../Todo';
import { CommonModule } from '@angular/common';
// import { AsyncLocalStorage } from 'async_hooks';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodosComponent } from '../add-todos/add-todos.component';
@Component({
  selector: 'app-todo-button',
  standalone: true,
  imports: [CommonModule,TodoItemComponent,AddTodosComponent],
  templateUrl: './todo-button.component.html',
  styleUrl: './todo-button.component.css'
})

export class TodoButtonComponent {
     todos:Todo[]
    localItem:string
     constructor(){

        // this.localItem=localStorage.getItem("todos");
        // if(this.localItem==null){
        //    this.todos=[];
        // }
        // else{
        //   this.todos=JSON.parse(this.localItem)
        // }
      this.todos=[
        {
          sno:1, 
          title:"title1",
          desc: "desc1",
          active:true
          
         }
         ,
        {
          sno:2, 
          title:"title2",
          desc: "desc2",
          active:true
          
        },
        {
          sno:3, 
          title:"title3",
          desc: "desc3",
          active:true
          
        }
      ]
     }

     deleteFunc(todo:Todo){
      console.log(todo);

      const ind=this.todos.indexOf(todo)

      this.todos.splice(ind,1)
      // localStorage.setItem("todos",JSON.stringify(this.todos))
     }
     addfunc(todo: Todo){
      console.log(todo);
      this.todos.push(todo)
      // localStorage.setItem("todos",JSON.stringify(this.todos))
     }
     toggleTodo(todo:Todo){
      // if the button is clicked then event emitted by todo item is listened and handled here 
      const ind=this.todos.indexOf(todo)

      this.todos[ind].active=!this.todos[ind].active
      // local storage line localStorage.setItem("todos",JSON.stringfy(this.todos))
     }
}
