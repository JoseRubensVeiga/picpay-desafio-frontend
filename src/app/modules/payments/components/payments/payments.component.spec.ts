import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ToastrModule } from "ngx-toastr";
import { TaskServiceMock } from "../../mocks/services/task-service.mock";
import { TASK_SERVICE } from "../../tokens/task-service.token";

import { PaymentsComponent } from "./payments.component";

describe("PaymentsComponent", () => {
  let component: PaymentsComponent;
  let fixture: ComponentFixture<PaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
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
