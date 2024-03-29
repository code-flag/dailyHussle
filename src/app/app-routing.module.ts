import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./application/application.module').then( m => m.ApplicationPageModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then( m => m.ComponentsPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./application/application.module').then( m => m.ApplicationPageModule)
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
