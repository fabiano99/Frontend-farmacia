import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from './login.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private login: Login = new Login();

  private loginAutenticado: boolean = false;

  mostrarMenu = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private service: LoginService
  ) { }

  fazerLogin(login: Login) {
    if (login != null) {
      this.loginAutenticado = true;
      this.mostrarMenu.emit(true);
      this.router.navigate(['/admin']);
    }
    else {
      this.loginAutenticado = false;
      this.mostrarMenu.emit(false);
      this.router.navigate(['/login']);
    }
  }

  loginAuth() {
    return this.loginAutenticado;
  }
}
