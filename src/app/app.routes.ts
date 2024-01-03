import { Routes } from '@angular/router';
import { TodoButtonComponent } from './todo-button/todo-button.component';
import { AboutComponent } from './about/about.component';
 export const routes: Routes = [
 { path: './', component: TodoButtonComponent},
  {  path:'about' , component: AboutComponent}

 ];


export class AppRoutingModule{}