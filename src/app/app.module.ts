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

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoursePartComponent } from './components/ui/course-part/course-part.component';
import { NavbarTitleComponent } from './components/ui/navbar-title/navbar-title.component';
import { ActivityComponent } from './components/ui/activity/activity.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { CouponComponent } from './components/admin/coupon/coupon.component';
import { CourseComponent } from './components/admin/course/course.component';
import { LessonComponent } from './components/admin/lesson/lesson.component';
import { MessageComponent } from './components/admin/message/message.component';
import { QuestionComponent } from './components/admin/question/question.component';
import { UserComponent } from './components/admin/user/user.component';
import { UserActivityComponent } from './components/admin/user-activity/user-activity.component';
import { VideoComponent } from './components/admin/video/video.component';
import { QuizCRUDComponent } from './components/admin/quiz-crud/quiz-crud.component';
import { AdminAsideComponent } from './components/admin/admin-aside/admin-aside.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CreateComponent } from './components/admin/category/components/create/create.component';
import { UpdateComponent } from './components/admin/category/components/update/update.component';
import { DeleteComponent } from './components/admin/category/components/delete/delete.component';
import { GetAllComponent } from './components/admin/category/components/get-all/get-all.component';
import { CouponCreateComponent } from './components/admin/coupon/coupon-create/coupon-create.component';
import { CouponUpdateComponent } from './components/admin/coupon/coupon-update/coupon-update.component';
import { CouponGetAllComponent } from './components/admin/coupon/coupon-get-all/coupon-get-all.component';
import { CouponDeleteComponent } from './components/admin/coupon/coupon-delete/coupon-delete.component';
import { CourseCreateComponent } from './components/admin/course/course-create/course-create.component';
import { CourseGetAllComponent } from './components/admin/course/course-get-all/course-get-all.component';
import { CourseUpdateComponent } from './components/admin/course/course-update/course-update.component';
import { CourseDeleteComponent } from './components/admin/course/course-delete/course-delete.component';
import { LessonCreateComponent } from './components/admin/lesson/lesson-create/lesson-create.component';
import { LessonUpdateComponent } from './components/admin/lesson/lesson-update/lesson-update.component';
import { LessonDetAlComponent } from './components/admin/lesson/lesson-det-al/lesson-det-al.component';
import { LessonGetAllComponent } from './components/admin/lesson/lesson-get-all/lesson-get-all.component';
import { LessonDeleteComponent } from './components/admin/lesson/lesson-delete/lesson-delete.component';
import { MessageCreateComponent } from './components/admin/message/message-create/message-create.component';
import { MessageDeleteComponent } from './components/admin/message/message-delete/message-delete.component';
import { MessageUpdateComponent } from './components/admin/message/message-update/message-update.component';
import { MessageGetAllComponent } from './components/admin/message/message-get-all/message-get-all.component';
import { QuestionCreateComponent } from './components/admin/question/question-create/question-create.component';
import { QuestionUpdateComponent } from './components/admin/question/question-update/question-update.component';
import { QuestionDelteComponent } from './components/admin/question/question-delte/question-delte.component';
import { QuestionDeleteComponent } from './components/admin/question/question-delete/question-delete.component';
import { QuestionGetAllComponent } from './components/admin/question/question-get-all/question-get-all.component';
import { QuizCreateComponent } from './components/admin/quiz-crud/quiz-create/quiz-create.component';
import { QuizDeleteComponent } from './components/admin/quiz-crud/quiz-delete/quiz-delete.component';
import { QuizUpdateComponent } from './components/admin/quiz-crud/quiz-update/quiz-update.component';
import { QuizGetAllComponent } from './components/admin/quiz-crud/quiz-get-all/quiz-get-all.component';

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
    ReceiveEmailCodeComponent,
    CoursePartComponent,
    NavbarTitleComponent,
    ActivityComponent,
    CategoryComponent,
    CouponComponent,
    CourseComponent,
    LessonComponent,
    MessageComponent,
    QuestionComponent,
    UserComponent,
    UserActivityComponent,
    VideoComponent,
    QuizCRUDComponent,
    AdminAsideComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    GetAllComponent,
    CouponCreateComponent,
    CouponUpdateComponent,
    CouponGetAllComponent,
    CouponDeleteComponent,
    CourseCreateComponent,
    CourseGetAllComponent,
    CourseUpdateComponent,
    CourseDeleteComponent,
    LessonCreateComponent,
    LessonUpdateComponent,
    LessonDetAlComponent,
    LessonGetAllComponent,
    LessonDeleteComponent,
    MessageCreateComponent,
    MessageDeleteComponent,
    MessageUpdateComponent,
    MessageGetAllComponent,
    QuestionCreateComponent,
    QuestionUpdateComponent,
    QuestionDelteComponent,
    QuestionDeleteComponent,
    QuestionGetAllComponent,
    QuizCreateComponent,
    QuizDeleteComponent,
    QuizUpdateComponent,
    QuizGetAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
