import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReactiveForm';
  form = new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    body:new FormControl('',[Validators.required])
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    alert("Form Data Submitted");
  }
}
