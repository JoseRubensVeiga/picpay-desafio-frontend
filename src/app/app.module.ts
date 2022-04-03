import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './modules/auth/auth.module';
import { ErrorDialogComponent } from './modules/components/error-dialog/error-dialog.component';


registerLocaleData(localePT);

@NgModule({
  declarations: [AppComponent, ErrorDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

