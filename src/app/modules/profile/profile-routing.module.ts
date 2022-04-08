import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditProfileComponent } from "./components/edit-profile";

const routes: Routes = [
  {
    path: "meu-perfil",
    component: EditProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
