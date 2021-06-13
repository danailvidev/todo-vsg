import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos.routing';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [TodosRoutingModule.components],
  imports: [CommonModule, TodosRoutingModule],
  exports: [],
  providers: [TodosService],
})
export class TodosModule {}
