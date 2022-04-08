import { TestBed } from "@angular/core/testing";
import { TaskServiceMock } from "../../mocks/services/task-service.mock";
import { TASK_SERVICE } from "../../tokens/task-service.token";

import { TaskService } from "./task.service";

describe("TaskService", () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TaskService,
          useClass: TaskServiceMock,
        },
      ],
    });
    service = TestBed.inject(TaskService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
