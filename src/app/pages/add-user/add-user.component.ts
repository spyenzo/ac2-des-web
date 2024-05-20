import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user = {
    name: '',
    email: '',
    role: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Usuário cadastrado com sucesso:', this.user);
    this.router.navigate(['/app/users']);
  }
}