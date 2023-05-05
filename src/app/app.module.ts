import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//módulos
import { ForecastModule } from './forecast/forecast.module';
import { HomepageModule } from './homepage/homepage.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ForecastModule,
    HomepageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
