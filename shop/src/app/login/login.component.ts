import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  loginUser:User = new User();
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',Validators.required)
      }
    );
  }

  login(){
    this.loginUser = Object.assign({},this.loginForm.value)
    this.accountService.logIn(this.loginUser);
  }
}
