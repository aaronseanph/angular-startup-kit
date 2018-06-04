import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { AdminComponent } from './admin/admin.component';
import { AppRouteModule } from 'src/app/app.routing.module';
import { AdminModule } from 'src/app/admin/admin.module';
import { FrontModule } from 'src/app/front/front.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    AdminModule,
    FrontModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
