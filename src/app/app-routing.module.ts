import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGuard } from "./@core/guards/auth";

const routes: Route[] = [
  {
    path: "autenticacao",
    loadChildren: () =>
      import("./modules/authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: "pagamentos",
    loadChildren: () =>
      import("./modules/payments/payments.module").then(
        (m) => m.PaymentsModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: "",
    redirectTo: "autenticacao",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
