import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";

import { PaymentsRoutingModule } from "./payments-routing.module";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { PaymentsComponent } from "./components/payments";
import { getPtPaginatorIntl } from "src/app/@core/intl/paginator-intl";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { TasksService } from "./services/tasks";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [PaymentsComponent],
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
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useValue: getPtPaginatorIntl(),
    },

    TasksService,
  ],
})
export class PaymentsModule {}
