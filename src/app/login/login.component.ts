import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private fb: FormBuilder){}
  loginForm = this.fb.group({
    email: '',
    password: ''
  });
  registerForm = this.fb.group({
    name: '',
    email: '',
    password: ''
  });

  submitLogin(){

  }

  submitRegister(){

  }

}
