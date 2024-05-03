import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OverwiewComponent } from './components/pages/overwiew/overwiew.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { ReceiveEmailCodeComponent } from './components/receive-email-code/receive-email-code.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { CourseDetailComponent } from './components/pages/course-detail/course-detail.component';
import { LeaderboardComponent } from './components/pages/leaderboard/leaderboard.component';
import { MessagingComponent } from './components/pages/messaging/messaging.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { AuthGuard } from './guards/User/user.guard';

const routes: Routes = [
  { path: 'login', title: 'Login', component: RegisterComponent},
  { path: 'register', title: 'Register', component: RegisterComponent},
  { path: 'overview', title: 'OverView', component: OverwiewComponent, canActivate: [AuthGuard]},
  { path: 'forgot-password', title: 'ForgotPassword', component: ForgotPasswordComponent},
  { path: 'confirm-password', title: 'ConfirmPassword', component: ConfirmPasswordComponent},
  { path: 'receive-email-code', title: 'ReceiveEmailCode', component:ReceiveEmailCodeComponent},
  { path: '', title: 'OverView', component: OverwiewComponent, canActivate: [AuthGuard]},
  { path: 'login', title: 'Login', component: RegisterComponent},
  { path: 'forgot-password', title: 'ForgotPassword', component: ForgotPasswordComponent},
  { path: 'courses', title: 'Courses', component: CoursesComponent, canActivate: [AuthGuard]},
  { path: 'schedule', title: 'Schedule', component: ScheduleComponent, canActivate: [AuthGuard]},
  { path: 'messaging', title: 'Messaging', component: MessagingComponent, canActivate: [AuthGuard]},
  { path: 'leaderboard', title: 'Leader Board', component: LeaderboardComponent, canActivate: [AuthGuard]},
  { path: 'course-detail', title: 'Course Detail', component: CourseDetailComponent, canActivate: [AuthGuard]},
  { path: 'profile', title: 'Profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'quiz', title: 'Quiz', component: QuizComponent, canActivate: [AuthGuard]},
  { path: '**', title: 'Not Found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }