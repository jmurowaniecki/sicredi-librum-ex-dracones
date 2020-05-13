import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screen/login/login.component';
import { PannelComponent } from './screen/pannel/pannel.component';
import { DragonComponent } from './screen/pannel/dragon/dragon.component';
import { AdminComponent } from './screen/pannel/admin/admin.component';
import { AdminFormComponent } from './screen/pannel/admin/adminform.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login',    component: LoginComponent },
  { path: 'logout',   component: LoginComponent },
  { path: 'admin',    component: AdminComponent,     canActivate: [AuthGuard] },
  { path: 'edit/:id', component: AdminFormComponent, canActivate: [AuthGuard] },
  { path: 'new',      component: AdminFormComponent, canActivate: [AuthGuard] },
  {
    path: 'dragon',
    component: PannelComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DragonComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: DragonComponent
      },
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
