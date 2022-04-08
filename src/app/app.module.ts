import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";

import localePt from "@angular/common/locales/pt";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./@shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localePt);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,

    ToastrModule.forRoot(),

    HttpClientModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
