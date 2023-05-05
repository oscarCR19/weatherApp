import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastPageComponent } from './components/forecast-page/forecast-page.component';


@NgModule({
  declarations: [
    ForecastPageComponent
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule
  ]
})
export class ForecastModule { }
