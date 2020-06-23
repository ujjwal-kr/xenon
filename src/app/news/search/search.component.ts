import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit, OnDestroy {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      search: ['', [
        Validators.required
      ]]
    });

  }

  get search() {
    return this.form.get('search').value
  }

  submit() {
    if(this.form.get('search').errors) {
      return 
    } else {
      return this.router.navigateByUrl('/news/topics/'+this.search)
    }
  }

  ngOnDestroy() {
    this.form = null
  }

}
