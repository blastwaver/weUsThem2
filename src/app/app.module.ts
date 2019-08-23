import { FeatureModule } from './module/feature/feature.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WgtTableModule } from './module/widget/app-widget-table/wgt-table.module';
import { WgtNavModule } from './module/widget/app-widget-nav/wgt-nav.component.module';
import { TestService } from 'src/api/test.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    WgtTableModule,
    WgtNavModule,
    FeatureModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
