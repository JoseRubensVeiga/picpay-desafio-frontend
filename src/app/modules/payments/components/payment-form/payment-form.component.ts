import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Task } from "../../models/Task";

@Component({
  selector: "app-payment-form",
  templateUrl: "./payment-form.component.html",
  styleUrls: ["./payment-form.component.scss"],
})
export class PaymentFormComponent implements OnInit {
  @Input() task: Task | null;
  @Output() canceled = new EventEmitter();

  mode: "Adicionar" | "Editar" = "Adicionar";

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();

    this.setMode();
  }

  onCancelClick(): void {
    this.canceled.emit();
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      value: [null, Validators.required],
      date: [null, Validators.required],
      title: [null, Validators.required],
    });
  }

  private setMode(): void {
    if (!this.task) {
      return;
    }

    this.mode = "Editar";

    this.formGroup.patchValue({
      name: this.task.name,
      value: this.task.value,
      date: this.task.date,
      title: this.task.title,
    });
  }
}
