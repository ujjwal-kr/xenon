import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TopicsComponent } from './news/topics/topics.component';
import { SearchComponent } from './news/search/search.component';
import { NewsService } from './news/news.service';

const routes: Routes = [
  { path: 'topics/:id', component: NewsComponent },
  { path: 'topics', component: TopicsComponent }
]

@NgModule({
  declarations: [NewsComponent, TopicsComponent, SearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [NewsService]
})
export class NewsModule { }
