import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"" , component: ProductDetailsComponent},

  {path:"login" , component: LoginComponent},
  {path:"adminLogIn" , component: LoginComponent},
  {path:"signup" , component: SignupComponent},
  {path:"product-details" , component: ProductDetailsComponent},
  {path:"product-admin" , component: ProductAdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
