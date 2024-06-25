import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodosComponent } from '../add-todos/add-todos.component';

@Component({
  selector: 'app-todo-button',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodosComponent],
  templateUrl: './todo-button.component.html',
  styleUrl: './todo-button.component.css'
})

export class TodoButtonComponent implements OnInit {
  todos: Todo[]
  localItem: string | null;
  //  constructor(){

  //  }
  constructor() {

    this.localItem = null;

    if (typeof localStorage !== 'undefined') {
      this.localItem = localStorage.getItem("todos");
    }

    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);

    }
  }
  ngOnInit(): void {

  }
  addfunc(todo: Todo) {


    this.todos.push(todo)
    console.log(this.todos)
    // let localItem:string
    console.log(localStorage);
    localStorage.setItem("todos", JSON.stringify(this.todos))
    this.localItem = localStorage.getItem("todos");


  }
  deleteFunc(todo: Todo) {
    console.log(todo);

    const ind = this.todos.indexOf(todo)

    this.todos.splice(ind, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  toggleTodo(todo: Todo) {
    // if the button is clicked then event emitted by todo item is listened and handled here 
    const ind = this.todos.indexOf(todo)

    this.todos[ind].active = !this.todos[ind].active;
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  clearAll() {
    this.todos = [];
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  clearAllDone() {
    // this.doneTodos=[];
    this.todos = this.todos.filter((todo: Todo) => {
      return todo.active === true;
    })
    localStorage.setItem("todos", JSON.stringify(this.todos))

  }

}
