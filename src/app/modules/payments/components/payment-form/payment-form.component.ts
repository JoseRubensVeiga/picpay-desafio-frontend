import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificationService } from "src/app/@core/services/notification";
import { Task } from "../../models/Task";

import { format, parse } from "date-fns";
import { CustomValidators } from "src/app/@core/validators/CustomValidators";

@Component({
  selector: "app-payment-form",
  templateUrl: "./payment-form.component.html",
  styleUrls: ["./payment-form.component.scss"],
})
export class PaymentFormComponent implements OnInit {
  @Input() task: Task | null;
  @Output() canceled = new EventEmitter();
  @Output() saved = new EventEmitter();

  mode: "Adicionar" | "Editar" = "Adicionar";

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.buildForm();

    this.setMode();
  }

  onCancelClick(): void {
    this.canceled.emit();
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.notification.error("Por favor, preencha os campos corretamente");
      return;
    }

    this.emitSaved();
  }

  private emitSaved(): void {
    const formRawValue = this.formGroup.getRawValue();

    this.saved.emit({
      name: formRawValue.name,
      value: +formRawValue.value,
      date: parse(formRawValue.date, "ddMMyyyy", new Date()),
      title: formRawValue.title,
    });
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      value: [null, Validators.required],
      date: [null, [Validators.required, CustomValidators.brazilianDate]],
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
      date: format(this.task.date, "dd/MM/yyyy"),
      title: this.task.title,
    });
  }
}
