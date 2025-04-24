import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { jwtInterceptor } from './app/interceptors/jwt.interceptor';

bootstrapApplication(AppComponent, {
  providers:[provideHttpClient(withInterceptorsFromDi()),{
    provide: HTTP_INTERCEPTORS,
      useClass: jwtInterceptor,
      multi: true
  }, 
     provideRouter(routes)]
})
  .catch((err) => console.error(err));
