import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
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
  subscription: Subscription = new Subscription();

  constructor(private message: NzMessageService, private svc: TodosService) {}

  ngOnInit(): void {
    this.getLatest();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getLatest() {
    this.subscription.add(
      this.svc.fetchLatest().subscribe((res: any) => (this.todos = res))
    );
  }

  onDetailClick(todo: Todo, index: number) {
    this.subscription.add(
      this.svc.fetchById(todo.id).subscribe((res: any) => {
        this.todos[index] = res;
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

  trackBy(index: any, item: any) {
    return item.id;
  }
}
