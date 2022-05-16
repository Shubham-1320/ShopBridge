import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './shared/services/product.service';
import {MatIconModule} from '@angular/material/icon';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { provideFirebaseApp, initializeApp} from '@angular/fire/app';
import { provideDatabase,getDatabase} from '@angular/fire/database';
import { environment } from 'src/environments/environment.prod'; 

@NgModule({
  declarations: [
    AppComponent,
    ProductAdminComponent,
    ProductDetailsComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    provideFirebaseApp(()=> initializeApp(environment.firebase)),
    provideDatabase(()=>getDatabase())
   
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
