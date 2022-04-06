import { Component, Inject } from "@angular/core";
import { IAuthService } from "./@core/interfaces/IAuthService";
import { AUTH_SERVICE } from "./@core/tokens/auth-service.token";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(@Inject(AUTH_SERVICE) private authService: IAuthService) {}
}
