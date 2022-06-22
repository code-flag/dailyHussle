import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsPageRoutingModule } from './components-routing.module';

import { ComponentsPage } from './components.page';
import { AppSettingsComponent } from './app-settings/app-settings.component';
import { BottomDrawerComponent } from './bottom-drawer/bottom-drawer.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobPostCardComponent } from './job-post-card/job-post-card.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { ReviewComponent } from './review/review.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsPageRoutingModule
  ],
  declarations: [
    ComponentsPage,
    AppSettingsComponent,
    BottomNavigationComponent,
    RatingStarComponent,
    ButtonComponent,
    IconComponent,
    JobDetailComponent,
    JobPostCardComponent,
    JobPostingComponent,
    ReviewComponent,
    SideNavigationComponent,
  ],
  exports: [
    BottomNavigationComponent,
    RatingStarComponent,
    ButtonComponent,
    IconComponent,
    JobDetailComponent,
    JobPostCardComponent,
    JobPostingComponent,
    ReviewComponent,
    SideNavigationComponent,
  ]
})
export class ComponentsPageModule {}
