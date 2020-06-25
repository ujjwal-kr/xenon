import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit(): void {
    console.log("object")
    this.afs.collection('stories').valueChanges().subscribe(data => {
      console.log(data)
    })
  }

}
