import { Component, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router){ console.log("rescue me!");}
  loginForm = this.fb.group({
    email: '',
    password: ''
  });
  registerForm = this.fb.group({
    name: '',
    email: '',
    password: ''
  });

  possibleImages: string[] = ["../../assets/login-img-1.png","../../assets/login-img-2.png"];
  imgCounter : number = 0;
  imgPhoneSig: WritableSignal<string> = signal("../../assets/login-img-1.png");

  ngOnInit(): void {
      setInterval(this.changeImgFocused.bind(this), 5000);
  }
  changeImgFocused(){
    console.log("aaa",this.imgPhoneSig);
    this.imgPhoneSig.set(this.possibleImages[this.imgCounter]);
    this.imgCounter++;
    if(this.imgCounter >= this.possibleImages.length) this.imgCounter = 0;
  }

  submitLogin(){
    let userLogin: UserLogin = {
      email: this.loginForm.controls.email.value!,
      password: this.loginForm.controls.password.value!
    };
    this.loginService.login(userLogin).subscribe(response => {
      if(response.succeed)
      {
        this.router.navigate(["/home"]);
      }
    })
  }

  submitRegister(){

  }

}
