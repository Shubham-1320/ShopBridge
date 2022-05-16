import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm :any|FormGroup

  constructor( private fb:FormBuilder, private http: HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['',[Validators.required]],
      loginId : ['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(4)],]
    })
  }

  ngSignUp(){
    this.http.post("https://shopbridge-3ab09-default-rtdb.firebaseio.com/signupUsers.json",this.signUpForm.value)
    .subscribe(res=>{
      alert('Signup Successful..')
      this.route.navigate(['login'])
    })

  }

}
