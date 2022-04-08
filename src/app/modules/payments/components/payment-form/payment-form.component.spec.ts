import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NgxMaskModule } from "ngx-mask";
import { ToastrModule } from "ngx-toastr";

import { PaymentFormComponent } from "./payment-form.component";

describe("PaymentFormComponent", () => {
  let component: PaymentFormComponent;
  let fixture: ComponentFixture<PaymentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentFormComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,

        ToastrModule.forRoot(),
        NgxMaskModule.forRoot(),

        MatFormFieldModule,
        MatInputModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
