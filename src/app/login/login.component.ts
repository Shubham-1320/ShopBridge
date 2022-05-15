import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { find } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : any|FormGroup

  constructor(private fb:FormBuilder,private http:HttpClient, private routr:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      loginId : ['', [Validators.required]],
      password : ['',[Validators.required,Validators.minLength(4)]],
    });
  }

  onSubmit(){
    this.http.get("http://localhost:3000/signupUsers")
    .subscribe((res:any)=>{
      const user = res.find((val:any)=>{
        return val.loginId === this.loginForm.value.loginId &&
        val.password === this.loginForm.value.password
      });
      if(user){
        alert("LogIn Successful...");
        this.routr.navigate(['product-admin'])
        this.loginForm.reset();
        
      }else{
        alert('user not Found..!!')
      }
    },err=>{
      alert('Somthing went wrong..!!')
    });

    

  }


}
