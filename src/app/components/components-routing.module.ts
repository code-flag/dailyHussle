import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsPage } from './components.page';
import { ReviewComponent } from './review/review.component';
import { UserReviewComponent } from './user-review/user-review.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsPage,
  },
  {
    path: 'user-review', component: UserReviewComponent,
  },
  {
    path: 'review', component: ReviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsPageRoutingModule {}
