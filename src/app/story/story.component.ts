import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Story } from './story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {
stories: Story[];
  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.afs.collection('stories', ref => ref.orderBy('date')).valueChanges().subscribe(data => {
      this.stories = data.reverse()
    })

  }

}
