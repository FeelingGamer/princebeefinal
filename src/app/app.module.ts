import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PackagesComponent } from './packages/packages.component';
import { NavloginComponent } from './navlogin/navlogin.component';
import { BookComponent } from './book/book.component';


const appRoute: Routes = [
  { 
    path: 'login', component: AuthComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'packages', component: PackagesComponent
  },
  {
    path: 'book', component: BookComponent
  }
  
]




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    PackagesComponent,
    NavloginComponent,
    BookComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
