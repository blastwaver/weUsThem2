import { AppContactComponent } from './module/feature/app-contact/app-contact.component';
import { AppSymbolComponent } from './module/feature/app-symbol/app-symbol.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppLandingComponent } from './module/feature/app-landing/app-landing.component';
import { AppBrowsingComponent } from './module/feature/app-browsing/app-browsing.component';
// import { AppPageNotFoundComponent } from './module/feature/app-error/app-page-not-found.component';



const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing',
    component: AppLandingComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'browsing',
    component: AppBrowsingComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'symbol',
    component: AppSymbolComponent,

    // canActivate: [AuthGuardService],
  },
  {
    path: 'contact-us',
    component: AppContactComponent,
    // canActivate: [AuthGuardService],
  },
  // {
  //   path: '**',
  //   component: AppPageNotFoundComponent,
  //   canActivate: [AuthGuardService]
  // },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

