export interface Todo {
  id: any;
  name: string;
  description?: string;
  isDone?: boolean;
  dueDate?: Date | string;
  dueIn?: number;
}
