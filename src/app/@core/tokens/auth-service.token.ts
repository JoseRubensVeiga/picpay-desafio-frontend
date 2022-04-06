import { inject, InjectionToken } from "@angular/core";
import { IAuthService } from "../interfaces/IAuthService";
import { AuthService } from "../services/auth";

export const AUTH_SERVICE = new InjectionToken<IAuthService>("auth.service", {
  providedIn: "root",
  factory: () => inject(AuthService),
});
