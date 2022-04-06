import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { mapToClasses } from "src/app/@core/operators/mapToClass";
import endpoints from "src/environments/endpoints";
import { ITaskService } from "../../interfaces/ITaskService";
import { ITask, Task } from "../../models/Task";
import { UpsetTask } from "../../models/UpsetTask";

@Injectable()
export class TaskService implements ITaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const baseURL = endpoints.tasks;

    return this.http.get<ITask[]>(baseURL).pipe(mapToClasses(Task));
  }

  createTask(upsetTask: UpsetTask): Observable<void> {
    const baseURL = endpoints.tasks;

    return this.http.post<void>(baseURL, upsetTask);
  }
}
