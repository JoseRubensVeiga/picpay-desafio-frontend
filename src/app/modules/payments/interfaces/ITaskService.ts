import { Observable } from "rxjs";
import { Task } from "../models/Task";

export interface ITaskService {
  getTasks(): Observable<Task[]>;
}
