import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthenticationRoutingModule } from "./authentication-routing.module";

import { AuthenticationComponent } from "./components/authentication";
import { SignInComponent } from "./components/sign-in";

@NgModule({
  declarations: [AuthenticationComponent, SignInComponent],
  imports: [CommonModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
