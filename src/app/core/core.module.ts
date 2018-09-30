import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { StorageModule } from './storage/storage.module';
import { AuthGuard } from './auth/auth-guard';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    StorageModule
  ],
  declarations: []
})
export class CoreModule { }
