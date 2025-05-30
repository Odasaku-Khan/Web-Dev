import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import path from 'path';
import { authGuard } from './auth/auth.guard';
export const routes: Routes = [
    {
        path: 'login',
        loadComponent:()=>
            import('./auth/login/login.component').then((m)=>m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent:()=> 
            import('./auth/register/register.component').then((m)=>m.RegisterComponent)
    },
    {
        path:'dashboard/profile',
        canActivate:[authGuard],
        loadComponent:()=>
            import('./dashboard/profile/profile.component').then((m)=>m.ProfileComponent)
    },
    {
        path:'dashboard/skills',
        canActivate:[authGuard],
        loadComponent:()=>
            import('./dashboard/skills/skills.component').then((m)=>m.SkillsComponent)
    },
    {
        path:'',
        loadComponent:()=>
            import('./dashboard/home/home.component').then((m)=>m.HomeComponent),
    },
    {
        path:'dashboard/chat/:id',
        loadComponent:()=>
            import('./dashboard/chat/chat.component').then((m)=>m.ChatComponent)
    },
    {
        path: 'dashboard/messages',
        loadComponent: () =>
          import('./dashboard/messagescomponent/messagescomponent.component').then(m => m.MessagesComponent),
        canActivate: [authGuard]
      }

];
