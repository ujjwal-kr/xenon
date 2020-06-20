import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TopicsComponent } from './news/topics/topics.component';
import { SearchComponent } from './news/search/search.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: '', component: TopicsComponent }
]

@NgModule({
  declarations: [NewsComponent, TopicsComponent, SearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class NewsModule { }
