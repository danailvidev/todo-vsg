import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'vsg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos: any;

  constructor(private svc: TodosService) {}

  ngOnInit(): void {
    this.svc.fetchLatest().subscribe((res: any) => (this.todos = res));
  }
}
