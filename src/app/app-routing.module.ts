import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth-guard';
import {ProfileEditComponent} from "./modules/profile/profile-edit/profile-edit.component";
import {ProfileViewComponent} from "./modules/profile/profile-view/profile-view.component";

const routes: Routes = [

  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    children: [{
      path: 'edit',
      component: ProfileEditComponent
    },{
      path: "",
      component: ProfileViewComponent
    }]
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
