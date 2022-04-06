import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { MatModalModule } from "mat-modal";
import { NgxMaskModule } from "ngx-mask";

import { PaymentsRoutingModule } from "./payments-routing.module";

import { PaymentsComponent } from "./components/payments";
import { getPtPaginatorIntl } from "src/app/@core/intl/paginator-intl";
import { TaskService } from "./services/task";
import { PaymentFormComponent } from "./components/payment-form";
import { TASK_SERVICE } from "./tokens/task-service.token";

@NgModule({
  declarations: [PaymentsComponent, PaymentFormComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule,

    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,

    MatModalModule,

    NgxMaskModule.forRoot(),
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useValue: getPtPaginatorIntl(),
    },
    {
      provide: TASK_SERVICE,
      useClass: TaskService,
    },
  ],
})
export class PaymentsModule {}
