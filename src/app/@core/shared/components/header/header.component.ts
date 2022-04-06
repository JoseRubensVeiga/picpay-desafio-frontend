import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/@core/services/auth";
import { NotificationService } from "src/app/@core/services/notification";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {}

  onLogoutClick(): void {
    this.authService.logout();
    this.router.navigate(["autenticacao"]);

    this.notification.success("Você saiu com sucesso!");
  }
}
