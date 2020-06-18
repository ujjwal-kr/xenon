import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryComponent } from './story/story.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: StoryComponent}
]

@NgModule({
  declarations: [StoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StoryModule { }
