import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricipalViewComponent } from './pricipal-view/pricipal-view.component';

const routes: Routes = [

  {path:'home', component:PricipalViewComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
