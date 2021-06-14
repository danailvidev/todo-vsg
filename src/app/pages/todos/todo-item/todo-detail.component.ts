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
  @Input() todo!: Todo;
  @Output() onDetail: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() onUpdate: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() onDelete: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit(): void {}

  onDetailClick(e: Event, todo: Todo) {
    e.stopPropagation();
    if (todo && !todo.expand) this.onDetail.emit(todo);
    todo.expand = !todo.expand;
  }

  onUpdateButtonClick(e: Event) {
    e.stopPropagation();

    if (this.todo) this.onUpdate.emit(this.todo);
  }

  onDeleteButtonClick() {
    if (this.todo) this.onDelete.emit(this.todo);
  }
}
