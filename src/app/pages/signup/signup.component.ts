import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;
  constructor(private router: Router) {

    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    }, { validators: this.passwordMatchValidator() });
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const password = control.get('password')?.value;
      const passwordConfirmation = control.get('passwordConfirmation')?.value;

      if (password !== passwordConfirmation) {
        return { 'mismatch': true };
      }
      return null;
    };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log("New user added with success!")
      console.log(this.signupForm.value);
  
      // Armazenar os dados do usuário no localStorage
      localStorage.setItem('user', JSON.stringify(this.signupForm.value));
  
      this.signupForm.reset();
      this.router.navigate(["/login"]);
    }
  }
}