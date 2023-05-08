import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FormsModule
  ]
})
export class HomepageModule { }
