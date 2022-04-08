import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatModalModule } from "mat-modal";
import { ToastrModule } from "ngx-toastr";
import { TaskServiceMock } from "../../mocks/services/task-service.mock";
import { TASK_SERVICE } from "../../tokens/task-service.token";

import { PaymentsComponent } from "./payments.component";

describe("PaymentsComponent", () => {
  let component: PaymentsComponent;
  let fixture: ComponentFixture<PaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),

        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,

        MatModalModule,
        MatTableModule,
        MatCheckboxModule,
        MatCardModule,
        MatIconModule,
      ],
      declarations: [PaymentsComponent],
      providers: [
        {
          provide: TASK_SERVICE,
          useClass: TaskServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
