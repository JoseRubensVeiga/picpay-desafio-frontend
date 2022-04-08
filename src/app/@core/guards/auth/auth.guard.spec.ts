import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrModule } from "ngx-toastr";

import { AuthGuard } from "./auth.guard";

describe("AuthGuard", () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ToastrModule.forRoot()],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
