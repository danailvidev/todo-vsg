import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly endpoint = 'todos';

  constructor(private http: HttpClient) {}

  fetchLatest() {
    return this.http.get(this.endpoint);
  }
}
