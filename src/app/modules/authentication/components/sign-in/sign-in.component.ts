import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IAuthService } from "src/app/@core/interfaces/IAuthService";
import { INotificationService } from "src/app/@core/interfaces/INotificationService";
import { SignInRequest } from "src/app/@core/models/SignInRequest/SignInRequest";
import { AUTH_SERVICE } from "src/app/@core/tokens/auth-service.token";
import { NOTIFICATION_SERVICE } from "src/app/@core/tokens/notification-service.token";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  showPassword = false;

  formGroup: FormGroup;

  isAttempting$ = this.authService.isAttempting$;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(AUTH_SERVICE) private authService: IAuthService,
    @Inject(NOTIFICATION_SERVICE)
    private notification: INotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.notification.error("Por favor, preencha os campos corretamente");
      return;
    }

    this.attemptLogin();
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  private getSignInRequest(): SignInRequest {
    const formRawValue = this.formGroup.getRawValue();

    return new SignInRequest({
      email: formRawValue.email,
      password: formRawValue.password,
    });
  }

  private attemptLogin(): void {
    this.authService.attempt(this.getSignInRequest()).subscribe((user) => {
      this.router.navigate(["pagamentos"]);
      this.notification.success(`Bem vindo, ${user.name}`);
    });
  }
}
