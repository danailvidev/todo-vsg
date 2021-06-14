import { Component, OnInit } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Todo } from './todo';
import { TodosService } from './todos.service';

@Component({
  selector: 'vsg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos!: Todo[];
  public todo!: Todo;
  public subscription: Subscription = new Subscription();

  constructor(private message: NzMessageService, private svc: TodosService) {}

  ngOnInit(): void {
    this.getLatest();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getLatest() {
    this.subscription.add(
      this.svc.fetchLatest().subscribe((res: any) => {
        this.todos = res
          .sort((a: any, b: any) => a.id - b.id)
          .map((t: any) => ({ ...t, expand: false }));
      })
    );
  }

  onDetailClick(todo: Todo, index: number) {
    this.subscription.add(
      this.svc.fetchById(todo.id).subscribe((res: any) => {
        res.expand = true;
        this.todos[index] = res;
      })
    );
  }

  onUpdateClick(todo: Todo, index: number) {
    this.subscription.add(
      this.svc.update(todo).subscribe((res: any) => {
        this.createMessage('success', 'Successfully updated!');
      })
    );
  }

  onDeleteClick(todo: Todo, index: number) {
    this.subscription.add(
      this.svc
        .delete(todo.id)
        .pipe(
          catchError((err) => {
            this.createMessage('error', err.error);
            return throwError(err);
          })
        )
        .subscribe((res: any) => {
          this.todos.splice(index, 1);
          this.createMessage('success', 'Successfully deleted!');
        })
    );
  }

  createMessage(type: string, msg: string): void {
    this.message.create(type, msg);
  }

  onAddNewTodo(formValue: any): void {
    if (!formValue) {
      this.createMessage('error', 'Missing data!');
    }
    this.subscription.add(
      this.svc.create(formValue).subscribe((res) => {
        this.createMessage('success', 'Successfully created!');
        this.getLatest();
      })
    );
  }

  onHideAll(e: Event) {
    e.stopPropagation();

    for (const t of this.todos) {
      t.expand = false;
    }
  }

  trackBy(index: any, item: any) {
    return item.id;
  }
}
