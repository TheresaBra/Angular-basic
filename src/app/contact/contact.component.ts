import { Component, OnInit } from '@angular/core';
import { InputContact } from './../input-contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.contactForm = this.formBuilder.group({
          name: ['', Validators.required],
          surname: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          message: ['', [Validators.required, Validators.maxLength(300)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.contactForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')
  }
  

}
