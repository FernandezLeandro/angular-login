import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import { PricipalViewComponent } from './pricipal-view/pricipal-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { PasswordValidationDirective } from './services/custon-validations/password-directive/password-validation.directive';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    PricipalViewComponent,
    RegisterComponent,
    PasswordValidationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
