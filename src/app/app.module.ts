import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { routing } from './app.routing';
import { AuthService } from './pages/login/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './guards/auth-guard.service';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { NavbarUserComponent } from './pages/user/navbar-user/navbar-user.component';
import { NavbarAdminComponent } from './pages/admin/navbar-admin/navbar-admin.component';
import { LabsFormComponent } from './pages/labs/labs-form/labs-form.component';
import { LabsListComponent } from './pages/labs/labs-list/labs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    NavbarUserComponent,
    NavbarAdminComponent,
    LabsFormComponent,
    LabsListComponent,
    LabsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
