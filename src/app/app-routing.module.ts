import { Routes, RouterModule } from '@angular/router';
import { NgModule }     from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { AuthAdminGuard } from './authAdmin.guard';
import { LoginService } from './login/login.service';

const appRoutes: Routes = [
    { path: '', component: LoginComponent, },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent, canActivate: [AuthAdminGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to login
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [LoginService]
})
export class AppRoutingModule {}
