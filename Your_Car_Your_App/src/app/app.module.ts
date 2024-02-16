import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TalkComponent } from './talk/talk.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, TalkComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
