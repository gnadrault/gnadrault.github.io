import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm = this.formBuilder.group({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmitContact() {
    this.contactForm.reset();
  }

  onCancel() {
    this.contactForm.reset();
  }
}
