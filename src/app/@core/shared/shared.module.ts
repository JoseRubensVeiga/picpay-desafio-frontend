import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatMenuModule } from "@angular/material/menu";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";

import { HeaderComponent } from "./components/header/header.component";
import { AUTH_SERVICE } from "../tokens/auth-service.token";
import { AuthService } from "../services/auth";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatMenuModule, MatRippleModule, MatIconModule],
  exports: [HeaderComponent],
  providers: [
    {
      provide: AUTH_SERVICE,
      useExisting: AuthService,
    },
  ],
})
export class SharedModule {}
