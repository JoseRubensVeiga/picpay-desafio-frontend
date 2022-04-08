import { Inject, Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IAuthService } from "../../interfaces/IAuthService";
import { INotificationService } from "../../interfaces/INotificationService";
import { AUTH_SERVICE } from "../../tokens/auth-service.token";
import { NOTIFICATION_SERVICE } from "../../tokens/notification-service.token";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(AUTH_SERVICE) private authService: IAuthService,
    @Inject(NOTIFICATION_SERVICE) private notification: INotificationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isLoggedIn$.pipe(
      map((isLoggedIn) => {
        const path = route.url[0].path;
        const isAuthentication = path.startsWith("autenticacao");

        if (isAuthentication && isLoggedIn) {
          return this.router.parseUrl("pagamentos");
        }

        if (isAuthentication) {
          return true;
        }

        if (!isLoggedIn) {
          this.notification.error("Você não está autenticado");
          return this.router.parseUrl("autenticacao");
        }

        return true;
      })
    );
  }
}
