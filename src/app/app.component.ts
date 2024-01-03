import { RouterOutlet } from '@angular/router';



import {  Component } from '@angular/core';
import { TodoButtonComponent } from './todo-button/todo-button.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoButtonComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 2024;
}










