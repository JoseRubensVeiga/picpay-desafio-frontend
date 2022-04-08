import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ToastrModule } from "ngx-toastr";

import { AuthServiceMock } from "src/app/@core/mocks/services/auth-service.mock";
import { AUTH_SERVICE } from "src/app/@core/tokens/auth-service.token";
import { HeaderComponent } from "./header.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        RouterTestingModule,

        MatMenuModule,
        MatRippleModule,
        MatIconModule,
      ],
      declarations: [HeaderComponent],
      providers: [
        {
          provice: AUTH_SERVICE,
          useClass: AuthServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
