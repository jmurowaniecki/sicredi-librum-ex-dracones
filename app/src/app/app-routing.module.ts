import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screen/login/login.component';
import { PannelComponent } from './screen/pannel/pannel.component';


const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "pannel", component: PannelComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
