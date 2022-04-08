import { Observable, of } from "rxjs";
import { ITaskService } from "../../interfaces/ITaskService";
import { Task } from "../../models/Task";
import { UpsetTask } from "../../models/UpsetTask";

import { faker } from "@faker-js/faker";

export class TaskServiceMock implements ITaskService {
  getTasks(): Observable<Task[]> {
    return of(
      Array.from(
        { length: 3 },
        (_, i) =>
          new Task({
            id: i,
            date: faker.date.future().toISOString(),
            image: faker.internet.url(),
            isPayed: i % 2 === 0,
            name: faker.name.firstName(),
            title: faker.name.jobTitle(),
            username: `@${faker.name.firstName()}_${faker.name.lastName()}`,
            value: +faker.finance.amount(5, 1000, 2),
          })
      )
    );
  }

  createTask(upsetTask: UpsetTask): Observable<void> {
    return of(undefined);
  }
  removeTask(taskId: number): Observable<void> {
    return of(undefined);
  }
  updateTaskStatus(taskId: number, status: boolean): Observable<void> {
    return of(undefined);
  }
  updateTask(taskId: number, upsetTask: UpsetTask): Observable<void> {
    return of(undefined);
  }
}
