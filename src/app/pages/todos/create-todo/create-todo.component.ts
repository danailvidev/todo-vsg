import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

@Component({
  selector: 'vsg-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {
  todoForm!: FormGroup;
  subscription: Subscription = new Subscription();

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      name: this.fb.control('', [Validators.maxLength(100)]),
      description: this.fb.control('', [Validators.maxLength(500)]),
      isDone: this.fb.control(false),
      dueIn: this.fb.control(0),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  submitForm(): void {
    if (this.todoForm.valid) {
      this.onSubmit.emit(this.todoForm.value);
      this.todoForm.reset();
    }
  }
}
