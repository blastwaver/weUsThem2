import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule, MatPaginatorModule, MatFormFieldModule, MatInputModule } from '@angular/material';
// Angular Libarary
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { WgtTablePagenationComponent } from './wgt-table-pagenation.component';


// Angular Material
import {
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import { MaterialModule } from 'src/app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WgtTableSelectionComponent } from './wgt-table-selection.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    WgtTablePagenationComponent,
    WgtTableSelectionComponent
  ],
  exports: [
    WgtTablePagenationComponent,
    WgtTableSelectionComponent
  ],
  providers: [
  ]
})

export class WgtTableModule { }
