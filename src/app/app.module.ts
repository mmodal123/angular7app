import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule
  ],

  exports: [
      ],

  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
