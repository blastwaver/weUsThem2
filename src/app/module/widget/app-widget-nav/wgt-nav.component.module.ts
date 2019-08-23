
// Angular Libarary
import { NgModule } from '@angular/core';

// Component

// Angular
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material
import { MaterialModule } from 'src/app/material.module';

// Component
import { WgtNavComponent } from './wgt-nav.component';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    WgtNavComponent
  ],
  exports: [
    WgtNavComponent
  ],
  providers: [
  ]
})

export class WgtNavModule { }
