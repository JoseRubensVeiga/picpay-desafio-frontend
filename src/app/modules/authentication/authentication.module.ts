import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { AuthenticationRoutingModule } from "./authentication-routing.module";

import { AuthenticationComponent } from "./components/authentication";
import { SignInComponent } from "./components/sign-in";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AUTH_SERVICE } from "src/app/@core/tokens/auth-service.token";
import { AuthService } from "src/app/@core/services/auth";
import { NOTIFICATION_SERVICE } from "src/app/@core/tokens/notification-service.token";
import { NotificationService } from "src/app/@core/services/notification";

@NgModule({
  declarations: [AuthenticationComponent, SignInComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: AUTH_SERVICE,
      useClass: AuthService,
    },
    {
      provide: NOTIFICATION_SERVICE,
      useClass: NotificationService,
    },
  ],
})
export class AuthenticationModule {}
