import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { mapToClasses } from "src/app/@core/operators/mapToClass";
import endpoints from "src/environments/endpoints";
import { ITask, Task } from "../../models/Task";

@Injectable()
export class TasksService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const baseURL = endpoints.tasks;

    return this.http.get<ITask[]>(baseURL).pipe(mapToClasses(Task));
  }
}
