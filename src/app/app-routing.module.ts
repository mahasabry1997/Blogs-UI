import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnotherPageComponent } from './another-page/another-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FolloweingComponent } from './followeing/followeing.component';
import { FollowersComponent } from './followers/followers.component';
import { HomeComponent } from './home/home.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { SuggestedComponent } from './suggested/suggested.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'newBlog', component: NewBlogComponent },
  { path: 'userhome', component: UserHomeComponent },
  { path: 'following', component: FolloweingComponent },
  { path: 'followers', component: FollowersComponent },
  { path: 'anotherpage', component: AnotherPageComponent},
  {path:'suggested',component:SuggestedComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
