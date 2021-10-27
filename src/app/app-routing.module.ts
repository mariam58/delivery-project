import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH_BASE_PATH, HOME_PATH } from './constants/routes';

const routes: Routes = [
  { 
    // path: 'auth',
    path: AUTH_BASE_PATH,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    // path: '',
    path: HOME_PATH,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
