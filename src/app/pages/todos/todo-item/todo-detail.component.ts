import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animations } from '../animations';
import { Todo } from '../todo';

@Component({
  selector: 'vsg-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
  animations: animations,
})
export class TodoDetailComponent implements OnInit {
  expand: boolean = false;
  @Input() todo!: Todo;
  @Output() onDetail: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit(): void {}

  onItemClick(item: any, event: any) {
    console.log(item, event);
  }

  onDetailClick(todo: Todo) {
    if (todo && !this.expand) this.onDetail.emit(todo);
  }
}
