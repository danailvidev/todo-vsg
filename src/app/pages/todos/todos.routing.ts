import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoDetailComponent } from './todo-item/todo-detail.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [{ path: '', component: TodosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {
  static components = [TodosComponent,CreateTodoComponent, TodoDetailComponent];
}
