import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationPageRoutingModule } from './application-routing.module';

import { ApplicationPage } from './application.page';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotificationComponent } from './notification/notification.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { ComponentsPageModule } from '../components/components.module';
import { JobFeedComponent } from './job-feed/job-feed.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationPageRoutingModule,
    ComponentsPageModule
  ],
  declarations: [
    ApplicationPage,
    HomeComponent,
    InboxComponent,
    ProfileUpdateComponent,
    UserProfileComponent,
    NotificationComponent,
    AppNavigationComponent,
    JobFeedComponent
  ],
  exports: [
    ApplicationPage,
    HomeComponent,
    InboxComponent,
    ProfileUpdateComponent,
    UserProfileComponent,
    NotificationComponent,
    AppNavigationComponent,
    JobFeedComponent
  ]
})
export class ApplicationPageModule {}
