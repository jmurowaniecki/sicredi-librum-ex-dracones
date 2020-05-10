import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screen/login/login.component';
import { PannelComponent } from './screen/pannel/pannel.component';
import { DragonComponent } from './screen/pannel/dragon/dragon.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dragons',
    component: PannelComponent,
    children: [
      {
        path: '',
        redirectTo: '/dragon/1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'dragon',
    component: PannelComponent,
    children: [
      {
        path: '',
        redirectTo: '/dragon/1',
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: DragonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
