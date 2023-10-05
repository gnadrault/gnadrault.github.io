import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailRequest } from 'src/app/models/email-request.model';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  errorSendEmail: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {}

  onSubmitContact() {
    this.errorSendEmail = false;
    if (this.contactForm.valid) {
      console.log('Send email');
      this.emailService
        .sendEmail(this.createEmail(this.contactForm))
        .subscribe({
          next: () => {
            console.log('Email sent successfully');
            this.contactForm.reset();
          },
          error: () => {
            this.errorSendEmail = true;
          },
        });
    }
  }

  onCancel() {
    this.errorSendEmail = false;
    this.contactForm.reset();
  }

  createEmail(contactForm: FormGroup): EmailRequest {
    return new EmailRequest(
      contactForm.value.name,
      contactForm.value.email,
      contactForm.value.subject,
      contactForm.value.message
    );
  }
}
