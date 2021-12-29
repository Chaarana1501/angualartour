import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpClientInterceptor} from './http-client-interceptor';
import {LocalStorageService} from 'ngx-webstorage';
import {StorageServiceModule} from 'ngx-webstorage-service';
import {Ng2Webstorage} from 'ng2-webstorage';
import {AppInterceptorService} from './AppInterceptorService';
import { AddPostComponent } from './add-post/add-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditorModule} from '@tinymce/tinymce-angular';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPostComponent,
    HomeComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StorageServiceModule,
    Ng2Webstorage.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'post/:id', component: PostComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register-success', component: RegisterSuccessComponent},
      {path: 'home', component: HomeComponent},
      {path: 'add-post', component: AddPostComponent, canActivate: [AuthGuard]}
    ]),
    ReactiveFormsModule,
    EditorModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true},AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
