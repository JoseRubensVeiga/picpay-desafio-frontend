import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call logout and set logged in to false", () => {
    const spy = spyOn(service as any, "setLoggedIn").and.callThrough();

    service.logout();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should call setLoggedIn and isLoggedIn$ emit true", (done) => {
    service.isLoggedIn$.next(false);

    (service as any).setLoggedIn(true);

    service.isLoggedIn$.subscribe((isLoggedIn) => {
      expect(isLoggedIn).toBe(true);
      done();
    });
  });
});
