import { RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { UserComponent } from './pages/user/user.component';
import {LabsFormComponent} from "./pages/labs/labs-form/labs-form.component";
import {LabsListComponent} from "./pages/labs/labs-list/labs-list.component";

const APP_ROUTES = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'admin', component: AdminComponent, /*canActivate: [AuthGuardService]*/},
    { path: 'user', component: UserComponent, /*canActivate: [AuthGuardService]*/},
    { path: 'labs/new_record', component: LabsFormComponent },
    { path: 'labs/:id', component: LabsFormComponent },
  { path: 'labs', component: LabsListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
