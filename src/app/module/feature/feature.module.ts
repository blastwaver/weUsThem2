import { WgtTableModule } from './../widget/app-widget-table/wgt-table.module';
// Angular Libarary
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { AppContactComponent } from './app-contact/app-contact.component';
import { AppLandingComponent } from './app-landing/app-landing.component';
import { AppSymbolComponent } from './app-symbol/app-symbol.component';
import { AppBrowsingComponent } from './app-browsing/app-browsing.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    WgtTableModule
  ],
  declarations: [
    AppBrowsingComponent,
    AppContactComponent,
    AppLandingComponent,
    AppSymbolComponent
  ],
  exports: [
    CommonModule,
    AppBrowsingComponent
  ],
  providers: [
  ]
})

export class FeatureModule { }
