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

  fetchById(id: any) {
    return this.http.get(`${this.endpoint}/${id}`);
  }

  create(body: any) {
    return this.http.post(this.endpoint, body);
  }

  edit(body: any) {
    return this.http.put(this.endpoint, body);
  }
}
