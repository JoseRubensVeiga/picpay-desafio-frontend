import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Task } from "../../models/Task";
import { TasksService } from "../../services/tasks";

@Component({
  selector: "app-payments",
  templateUrl: "./payments.component.html",
  styleUrls: ["./payments.component.scss"],
})
export class PaymentsComponent implements OnInit, OnDestroy {
  searchInputControl = new FormControl();

  _destroyed$ = new Subject();

  displayedColumns = [
    "username",
    "title",
    "date",
    "value",
    "isPayed",
    "actions",
  ];

  dataSource = new MatTableDataSource<Task>();

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.registerSearchInputControlChanges();
    this.loadTasks();
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
  }

  private registerSearchInputControlChanges(): void {
    this.searchInputControl.valueChanges
      .pipe(takeUntil(this._destroyed$))
      .subscribe((value) => {
        console.log(value);
      });
  }

  private loadTasks(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.dataSource.data = tasks;
    });
  }
}
