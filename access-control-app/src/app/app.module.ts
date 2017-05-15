import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdDialogModule } from '@angular/material';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule }        from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { AuthAdminGuard } from './authAdmin.guard';
import { UserSearchComponent } from './user-search/user-search.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserSearchComponent,
    AlertComponent
  ],
  entryComponents: [
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    AppRoutingModule,
    MdDialogModule
  ],
  providers: [
    AuthGuard,
    AuthAdminGuard,
    AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
