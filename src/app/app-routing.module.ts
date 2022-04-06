import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const routes: Route[] = [
  {
    path: "autenticacao",
    loadChildren: () =>
      import("./modules/authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },

  {
    path: "pagamentos",
    loadChildren: () =>
      import("./modules/payments/payments.module").then(
        (m) => m.PaymentsModule
      ),
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
