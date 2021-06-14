import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly endpoint = 'todos';

  constructor(private http: HttpClient) {}

  fetchLatest(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  fetchById(id: any): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}`);
  }

  create(body: Todo): Observable<any> {
    return this.http.post(this.endpoint, body);
  }

  update(body: Todo): Observable<any> {
    return this.http.put(`${this.endpoint}/${body.id}`, body);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
