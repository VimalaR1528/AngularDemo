import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ProductComponent } from './product/product.component';

const route:Routes=[
  {path:"",redirectTo:"prod",pathMatch:'full'},
  {path:"login",component:LoginComponent},
{path:"empl",component:EmployeeComponent},
{path:"empl/:uname",component:EmployeeComponent},
{path:"home",component:HomeComponent},
{path:"prod",component:ProductComponent},
{path:"**",component:PageNotfoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    HomeComponent,
    PageNotfoundComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
   FormsModule,
   ReactiveFormsModule,
   RouterModule.forRoot(route),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
