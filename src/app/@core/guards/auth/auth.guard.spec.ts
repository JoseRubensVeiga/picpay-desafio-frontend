import { HttpClientModule } from "@angular/common/http";
import { TestBed, waitForAsync } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrModule } from "ngx-toastr";
import { Observable } from "rxjs";
import { INotificationService } from "../../interfaces/INotificationService";
import { NOTIFICATION_SERVICE } from "../../tokens/notification-service.token";

import { AuthGuard } from "./auth.guard";

describe("AuthGuard", () => {
  let guard: AuthGuard;
  let notification: INotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        NoopAnimationsModule,
      ],
    });
    guard = TestBed.inject(AuthGuard);
    notification = TestBed.inject(NOTIFICATION_SERVICE);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });

  it("canActivated should pass if logged", (done) => {
    const activatedRouteSnapshot = {
      url: [
        {
          path: "",
        },
      ],
    } as ActivatedRouteSnapshot;
    const routerStateSnapshot = { url: "" } as RouterStateSnapshot;

    const result$ = guard.canActivate(
      activatedRouteSnapshot,
      routerStateSnapshot
    ) as Observable<boolean>;

    result$.subscribe((result) => {
      expect(result).toBeTruthy();
      done();
    });
  });

  it("should call getUrlTreeResult and return true", () => {
    const routerStateSnapshot = {
      url: [
        {
          path: "",
        },
      ],
    } as ActivatedRouteSnapshot;
    const isLoggedIn = true;
    const result = (guard as any).getUrlTreeResult(
      routerStateSnapshot,
      isLoggedIn
    );

    expect(result).toBe(true);
  });

  it("should call getUrlTreeResult and return `pagamentos` UrlTree", () => {
    const routerStateSnapshot = {
      url: [
        {
          path: "autenticacao",
        },
      ],
    } as ActivatedRouteSnapshot;
    const isLoggedIn = true;
    const result = (guard as any).getUrlTreeResult(
      routerStateSnapshot,
      isLoggedIn
    ) as UrlTree;

    expect(result).toBeInstanceOf(UrlTree);
    expect(result.toString()).toBe("/pagamentos");
  });

  it("should call getUrlTreeResult and return true", () => {
    const routerStateSnapshot = {
      url: [
        {
          path: "autenticacao",
        },
      ],
    } as ActivatedRouteSnapshot;
    const isLoggedIn = false;
    const result = (guard as any).getUrlTreeResult(
      routerStateSnapshot,
      isLoggedIn
    );

    expect(result).toBe(true);
  });

  it("should redirect user to autenticacao and emit a notification error", () => {
    const routerStateSnapshot = {
      url: [
        {
          path: "",
        },
      ],
    } as ActivatedRouteSnapshot;
    const isLoggedIn = false;

    const notificationErrorSpy = spyOn(notification, "error").and.callThrough();
    const result = (guard as any).getUrlTreeResult(
      routerStateSnapshot,
      isLoggedIn
    );

    expect(notificationErrorSpy).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(UrlTree);
  });
});
