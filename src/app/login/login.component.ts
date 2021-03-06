import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // _router: any;
loginForm : FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,Validators.required)
})
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }

  login(){
if(!this.loginForm.valid)
{
  console.log('Invalid');return;
}
else{
this._router.navigate(['/user']);
//console.log(JSON.stringify(this.loginForm.value));
}
  }

  

}
