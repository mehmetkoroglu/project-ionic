import { HelpPageModule } from './modules/pages/options/help/help.module';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full'
  },
  {
    path: 'mainpage',
    loadChildren: () => import('./modules/pages/mainpage/mainpage.module').then(m => m.MainpagePageModule)
  },
  {
    path: 'profilepage',
    loadChildren: () => import('./modules/pages/profilepage/profilepage.module').then(m => m.ProfilepagePageModule)
  },
  {
    path: 'statspage',
    loadChildren: () => import('./modules/pages/statspage/statspage.module').then(m => m.StatspagePageModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./modules/pages/groups/groups.module').then(m => m.GroupsPageModule)
  },
  {
    path: 'lessons',
    loadChildren: () => import('./modules/pages/lessons/lessons.module').then(m => m.LessonsPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./modules/pages/options/options.module').then(m => m.OptionsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./modules/pages/options/password/password.module').then(m => m.PasswordPageModule)
  }
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
