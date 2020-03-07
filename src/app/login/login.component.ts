import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { addAccount } from './login.actions';
import { EmailValidator } from '@angular/forms';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
    
   }//, private store: Store<{ email:string }>

  ngOnInit(): void {
  }
  onClickSubmit(form_data) {
    this.router.navigate(['/home']);
    //this.store.dispatch(addAccount({ email: form_data.email}));
    
 }

}
