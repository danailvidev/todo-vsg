import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { TodosRoutingModule } from './todos.routing';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [TodosRoutingModule.components],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    NzCollapseModule,
    NzGridModule,
    NzListModule,
    NzCardModule,
    NzCheckboxModule,
    NzInputModule,
    NzFormModule,
    NzIconModule,
    NzInputNumberModule,
    NzButtonModule,
    NzMessageModule,
  ],
  exports: [],
  providers: [TodosService],
})
export class TodosModule {}
