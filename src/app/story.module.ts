import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryComponent } from './story/story.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: StoryComponent},
  {path: 'contact', component: ContactComponent}
]

const config = {
    apiKey: "AIzaSyAeW_5x-REWWAzcDcO-w6BAEE2B7qe1xhg",
    authDomain: "xenon-4dfeb.firebaseapp.com",
    databaseURL: "https://xenon-4dfeb.firebaseio.com",
    projectId: "xenon-4dfeb",
    storageBucket: "xenon-4dfeb.appspot.com",
    messagingSenderId: "847112549528",
    appId: "1:847112549528:web:d7677d1b4c30545a528ced"
}

@NgModule({
  declarations: [StoryComponent, ContactComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    RouterModule.forChild(routes)
  ]
})
export class StoryModule { }
