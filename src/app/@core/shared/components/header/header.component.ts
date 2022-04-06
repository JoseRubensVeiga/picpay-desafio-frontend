import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IAuthService } from "src/app/@core/interfaces/IAuthService";
import { INotificationService } from "src/app/@core/interfaces/INotificationService";
import { AUTH_SERVICE } from "src/app/@core/tokens/auth-service.token";
import { NOTIFICATION_SERVICE } from "src/app/@core/tokens/notification-service.token";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    @Inject(AUTH_SERVICE) private authService: IAuthService,
    @Inject(NOTIFICATION_SERVICE)
    private notification: INotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogoutClick(): void {
    this.authService.logout();
    this.router.navigate(["autenticacao"]);

    this.notification.success("Você saiu com sucesso!");
  }
}
