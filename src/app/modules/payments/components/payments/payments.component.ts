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

  constructor(@Inject(TASK_SERVICE) private taskService: ITaskService) {}

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

  onSaveTask(event: {
    date: Date;
    name: string;
    title: string;
    value: number;
  }): void {
    console.log(event);

    this.formModalControl.close();
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
