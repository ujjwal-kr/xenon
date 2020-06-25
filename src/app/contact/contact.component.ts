import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private afs: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(1)
      ]],
      email: ['', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(8)
      ]],
      message: ['', [
        Validators.required,
        Validators.maxLength(1000),
        Validators.minLength(1)
      ]]
    })
  }

  get name() { return this.form.get("name").value }
  get email() { return this.form.get("email").value }
  get message() { return this.form.get("message").value }

  send() {
    if (this.form.valid){
      const data = {
        name: this.name,
        message: this.message,
        email: this.email
      }
      this.form.reset()
      this.afs.collection('feedback').add(data);
    } else {
      alert('Errors in the form fields')
    }
  }

}
