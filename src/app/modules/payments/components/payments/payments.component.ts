import { Component, Inject, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Task } from "../../models/Task";

import { ModalControl } from "mat-modal";
import { ITaskService } from "../../interfaces/ITaskService";
import { TASK_SERVICE } from "../../tokens/task-service.token";
import { UpsetTask } from "../../models/UpsetTask";
import { NOTIFICATION_SERVICE } from "src/app/@core/tokens/notification-service.token";
import { INotificationService } from "src/app/@core/interfaces/INotificationService";
import { MatCheckboxChange } from "@angular/material/checkbox";

@Component({
  selector: "app-payments",
  templateUrl: "./payments.component.html",
  styleUrls: ["./payments.component.scss"],
})
export class PaymentsComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searchInputControl = new FormControl();

  _destroyed$ = new Subject();

  displayedColumns = ["name", "title", "date", "value", "isPayed", "actions"];

  dataSource = new MatTableDataSource<Task>();

  formModalControl = new ModalControl();

  removeModalControl = new ModalControl();

  selectedTask: Task | null;

  constructor(
    @Inject(TASK_SERVICE) private taskService: ITaskService,
    @Inject(NOTIFICATION_SERVICE) private notification: INotificationService
  ) {}

  ngOnInit(): void {
    this.registerSearchInputControlChanges();
    this.loadTasks();
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
  }

  onAddClick(): void {
    this.selectedTask = null;
    this.formModalControl.open();
  }

  onEditClick(task: Task): void {
    this.selectedTask = task;

    this.formModalControl.open();
  }

  onRemoveClick(task: Task): void {
    this.selectedTask = task;

    this.removeModalControl.open();
  }

  onSaveTask(upsetTask: UpsetTask): void {
    if (this.selectedTask) {
      this.editTask(upsetTask);
    } else {
      this.createTask(upsetTask);
    }

    this.formModalControl.close();
  }

  removeTask(): void {
    this.taskService.removeTask(this.selectedTask.id).subscribe(() => {
      this.notification.success("Tarefa removida com sucesso!");

      this.loadTasks();
      this.removeModalControl.close();
    });
  }

  changeTaskStatus(task: Task, event: MatCheckboxChange) {
    this.taskService.updateTaskStatus(task.id, event.checked).subscribe(() => {
      this.notification.success(
        `Status da tarefa ${task.id} alterado com sucesso!`
      );
    });
  }

  private editTask(upsetTask: UpsetTask): void {
    this.taskService
      .updateTask(this.selectedTask.id, upsetTask)
      .subscribe(() => {
        this.notification.success(
          `Tarefa ${this.selectedTask.id} alterada com sucesso!`
        );

        this.loadTasks();
      });
  }

  private createTask(upsetTask: UpsetTask): void {
    this.taskService.createTask(upsetTask).subscribe(() => {
      this.notification.success("Nova tarefa criada com sucesso!");

      this.loadTasks();
    });
  }

  private registerSearchInputControlChanges(): void {
    this.searchInputControl.valueChanges
      .pipe(takeUntil(this._destroyed$))
      .subscribe((value) => {
        this.dataSource.filter = value;
      });
  }

  private loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.dataSource.data = tasks;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
