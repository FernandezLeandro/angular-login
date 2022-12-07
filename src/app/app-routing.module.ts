import { RegisterComponent } from './register/register.component';
import { LogginComponent } from './loggin/loggin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricipalViewComponent } from './pricipal-view/pricipal-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  {path:'home', component:PricipalViewComponent},
  {path:'login', component:LogginComponent},
  {path:'register', component: RegisterComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
