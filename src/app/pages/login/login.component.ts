import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  invalidUser: boolean = false;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
  
      // Obter os dados do usuário do localStorage
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
  
      if (userData.email === email && userData.password === password) {
        // Login bem-sucedido
        console.log('Login successful');
        this.router.navigate(['/app']);
      } else {
        // Login falhou
        console.error('Login failed');
        this.invalidUser = true;
      }
    }
  }
}