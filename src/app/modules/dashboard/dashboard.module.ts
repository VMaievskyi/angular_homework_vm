import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserInfoSkillsComponent } from './user-info-skills/user-info-skills.component';
import { UserInfoDetailsComponent } from './user-info-details/user-info-details.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardPageComponent,
    UserInfoSkillsComponent,
    UserInfoDetailsComponent
  ]
})
export class DashboardModule { }
