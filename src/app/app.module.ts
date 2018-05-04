import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'news', component: NewsComponent }
    ]),
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
