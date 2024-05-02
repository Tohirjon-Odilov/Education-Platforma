import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterProtectGuard } from './guards/Admin/admin.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OverwiewComponent } from './components/pages/overwiew/overwiew.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { ReceiveEmailCodeComponent } from './components/receive-email-code/receive-email-code.component';

const routes: Routes = [
  { path: 'login', title: 'Login', component: RegisterComponent},
  { path: 'overview', title: 'OverView', component: OverwiewComponent},
  { path: 'forgot-password', title: 'ForgotPassword', component: ForgotPasswordComponent},
  { path: 'confirm-password', title: 'ConfirmPassword', component: ConfirmPasswordComponent},
  { path: 'receive-email-code', title: 'ReceiveEmailCode', component:ReceiveEmailCodeComponent},
  { path: '', title: 'OverView', component: OverwiewComponent},
  { path: 'login', title: 'Login', component: RegisterComponent},
  { path: 'forgot-password', title: 'ForgotPassword', component: ForgotPasswordComponent},
  { path: 'coniform-password', title: 'ConiformPassword', component: ConiformPasswordComponent},
  { path: 'overview', title: 'OverView', component: OverwiewComponent},
  { path: 'courses', title: 'OverView', component: OverwiewComponent},
  { path: 'schedule', title: 'OverView', component: OverwiewComponent},
  { path: 'messaging', title: 'OverView', component: OverwiewComponent},
  { path: 'leaderboard', title: 'OverView', component: OverwiewComponent},
  { path: 'course-detail', title: 'OverView', component: OverwiewComponent},
  { path: 'profile', title: 'OverView', component: OverwiewComponent},
  { path: 'quiz', title: 'OverView', component: OverwiewComponent},
  { path: '**', title: 'Not Found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }