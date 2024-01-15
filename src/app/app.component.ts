import { RouterOutlet,RouterLink,Routes } from '@angular/router';
import {  Component } from '@angular/core';
import { TodoButtonComponent } from './todo-button/todo-button.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodosComponent } from './add-todos/add-todos.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoButtonComponent,RouterOutlet,TodoItemComponent,AddTodosComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 2024;
}











