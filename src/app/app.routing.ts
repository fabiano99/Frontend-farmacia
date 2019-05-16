import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuardService } from './guards/auth-guard.service';

const APP_ROUTES = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);