import { Observable } from "rxjs";
import { Task } from "../models/Task";
import { UpsetTask } from "../models/UpsetTask";

export interface ITaskService {
  getTasks(): Observable<Task[]>;

  createTask(upsetTask: UpsetTask): Observable<void>;

  removeTask(taskId: number): Observable<void>;

  updateTaskStatus(taskId: number, status: boolean): Observable<void>;
}
