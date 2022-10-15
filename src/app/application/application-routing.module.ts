import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { JobFeedComponent } from './job-feed/job-feed.component';
import { ProProfileComponent } from './pro-profile/pro-profile.component';
import { JobPostingFormComponent } from './job-posting-form/job-posting-form.component';

const routes: Routes = [
  {
    path: 'router', component: AppNavigationComponent,
    children: [
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'inbox', component:InboxComponent,
      },
      {
        path: 'profile', component:UserProfileComponent,
      },
      {
        path: 'profile-update', component:ProfileUpdateComponent,
      },
      {
        path: 'notification', component:ProProfileComponent,
      },
      {
        path: 'post-job', component: JobPostingFormComponent,
      },
      {
        path: 'job-feed', component: JobFeedComponent,
      },
      {
        path: '**',
        component: HomeComponent,
      },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'router/home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationPageRoutingModule {}
