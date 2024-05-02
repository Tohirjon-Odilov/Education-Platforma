import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterProtectGuard } from './guards/Admin/admin.guard';
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

const routes: Routes = [
  { path: 'login', title: 'Login', component: RegisterComponent},
  { path: 'overview', title: 'OverView', component: OverwiewComponent},
  { path: 'forgot-password', title: 'ForgotPassword', component: ForgotPasswordComponent},
  { path: 'confirm-password', title: 'ConfirmPassword', component: ConfirmPasswordComponent},
  { path: 'receive-email-code', title: 'ReceiveEmailCode', component:ReceiveEmailCodeComponent},
  { path: '', title: 'OverView', component: OverwiewComponent},
  { path: 'login', title: 'Login', component: RegisterComponent},
  { path: 'forgot-password', title: 'ForgotPassword', component: ForgotPasswordComponent},
  { path: 'overview', title: 'OverView', component: OverwiewComponent},
  { path: 'courses', title: 'Courses', component: CoursesComponent},
  { path: 'schedule', title: 'Schedule', component: ScheduleComponent},
  { path: 'messaging', title: 'Messaging', component: MessagingComponent},
  { path: 'leaderboard', title: 'Leader Board', component: LeaderboardComponent},
  { path: 'course-detail', title: 'Course Detail', component: CourseDetailComponent},
  { path: 'profile', title: 'Profile', component: ProfileComponent},
  { path: 'quiz', title: 'Quiz', component: QuizComponent},
  { path: '**', title: 'Not Found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }