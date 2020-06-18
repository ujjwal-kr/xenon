import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsModule } from './news.module';
import { StoryModule } from './story.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsModule,
    StoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
