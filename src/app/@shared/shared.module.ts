import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatMenuModule } from "@angular/material/menu";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";

import { HeaderComponent } from "./components/header/header.component";
import { AUTH_SERVICE } from "../@core/tokens/auth-service.token";
import { AuthService } from "../@core/services/auth";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,

    RouterModule,

    MatMenuModule,
    MatRippleModule,
    MatIconModule,
  ],
  exports: [HeaderComponent],
  providers: [
    {
      provide: AUTH_SERVICE,
      useExisting: AuthService,
    },
  ],
})
export class SharedModule {}
