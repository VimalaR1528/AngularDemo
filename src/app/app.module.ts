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
import { TestComponent } from './test/test.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


const route:Routes=[
  {path:"",redirectTo:"project",pathMatch:'full'},
  {path:"login",component:LoginComponent},
{path:"empl",component:EmployeeComponent},
{path:"empl/:uname",component:EmployeeComponent},
{path:"home",component:HomeComponent},
{path:"prod",component:ProductComponent},
{path:"prodet",component:ProductDetailsComponent},
{path:"project",component:ProjectDetailsComponent},
{path:"test",component:TestComponent},
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
    TestComponent,
    ProductDetailsComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    BrowserModule,
   FormsModule,
   ReactiveFormsModule,
   RouterModule.forRoot(route),
      HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
