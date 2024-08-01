import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './userHome/user-home/user-home.component';
import { Store } from '@ngrx/store';
import { AppStateInterface } from './redux/all.interface';
import { isAuthSelector } from './redux/selectors';
import * as MyActions from './redux/actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent,UserHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'instagram-clone-new';
  constructor(private store: Store<AppStateInterface>){
    console.log("alo");
    //this.store.select(isAuthSelector).subscribe();
  }
  ngOnInit(): void {
    //this.store.dispatch(MyActions.getAuth()); // Dispatch action to load initial state
    //console.log("xd");
    //this.store.select(isAuthSelector).subscribe();

  }
}
