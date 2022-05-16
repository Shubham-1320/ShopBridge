import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { find, map } from 'rxjs';

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
    // console.log(this.http.get("https://shopbridge-3ab09-default-rtdb.firebaseio.com/signupUsers"))
    this.http.get("https://shopbridge-3ab09-default-rtdb.firebaseio.com/signupUsers.json")
    .pipe(map((res:any)=>{
      let usreArr = [];
      for(let key in res){
        usreArr.push(res[key])
      }
      return usreArr
    }))
    .subscribe((data:any)=>{
      console.log('productdata',data);
      const user = data.find((val:any)=>{
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
