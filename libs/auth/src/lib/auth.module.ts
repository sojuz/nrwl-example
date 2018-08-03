import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const authRoutes: Route[] = [
  { path: 'login', loadChildren: '@mastacode/auth#AuthModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LoginComponent }
    ]),
    CommonModule
  ],
  declarations: [LoginComponent],
})
export class AuthModule {}
