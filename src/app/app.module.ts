import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import {FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';



import {Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,
    AdminModule, HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
