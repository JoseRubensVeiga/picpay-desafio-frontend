import { Observable } from "rxjs";
import { Task } from "../models/Task";
import { UpsetTask } from "../models/UpsetTask";

export interface ITaskService {
  getTasks(): Observable<Task[]>;

  createTask(upsetTask: UpsetTask): Observable<void>;
}
