import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { AuthenticationRoutingModule } from "./authentication-routing.module";

import { AuthenticationComponent } from "./components/authentication";
import { SignInComponent } from "./components/sign-in";

@NgModule({
  declarations: [AuthenticationComponent, SignInComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class AuthenticationModule {}
