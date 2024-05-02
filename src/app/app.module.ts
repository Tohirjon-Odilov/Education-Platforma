import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterLink } from '@angular/router';
import { OverwiewComponent } from './components/pages/overwiew/overwiew.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';
import { MessagingComponent } from './components/pages/messaging/messaging.component';
import { LeaderboardComponent } from './components/pages/leaderboard/leaderboard.component';
import { CourseDetailComponent } from './components/pages/course-detail/course-detail.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideComponent } from './components/aside/aside.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { ReceiveEmailCodeComponent } from './components/receive-email-code/receive-email-code.component';


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    OverwiewComponent,
    CoursesComponent,
    ScheduleComponent,
    MessagingComponent,
    LeaderboardComponent,
    CourseDetailComponent,
    ProfileComponent,
    QuizComponent,
    NavbarComponent,
    AsideComponent,
    ForgotPasswordComponent,
    ConfirmPasswordComponent,
    ReceiveEmailCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
