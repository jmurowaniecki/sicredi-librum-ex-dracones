import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screen/login/login.component';
import { PannelComponent } from './screen/pannel/pannel.component';
import { DragonComponent } from './screen/pannel/dragon/dragon.component';
import { AdminComponent } from './screen/pannel/admin/admin.component';
import { AdminFormComponent } from './screen/pannel/admin/adminform.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LoginComponent
  },
  {
    path: 'dragons',
    component: PannelComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/dragon/1',
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: AdminFormComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      }
    ]
  },
  {
    path: 'dragon',
    component: PannelComponent, canActivate: [AuthGuard],
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
  },
  {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
