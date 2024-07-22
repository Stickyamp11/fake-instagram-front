import { Component, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
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

  }

  submitRegister(){

  }

}
