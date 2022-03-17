import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import { formErrors } from '../shared/formErrors';
import {
  BaseMessage,
  Email,
  FirstName,
  LastName,
  TelNum,
  ValidationMessages,
} from '../shared/validationMessages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  // @ViewChild('fform') feedbackFormDirective;

  formErrors = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
  } as formErrors;

  validationMessages = {
    firstname: {
      required: 'First Name is required.',
      minlength: 'First Name must be at least 2 characters long.',
      maxlength: 'FirstName cannot be more than 25 characters long.',
    } as FirstName,
    lastname: {
      required: 'Last Name is required.',
      minlength: 'Last Name must be at least 2 characters long.',
      maxlength: 'Last Name cannot be more than 25 characters long.',
    } as LastName,
    telnum: {
      required: 'Tel. number is required.',
      pattern: 'Tel. number must contain only numbers.',
    } as TelNum,
    email: {
      required: 'Email is required.',
      email: 'Email not in valid format.',
    } as Email,
  } as ValidationMessages;

  constructor(private fb: FormBuilder) {
    this.feedback = new Feedback('', '', 0, '', false, '', '');
    this.feedbackForm = this.createForm();
  }

  ngOnInit() {}

  createForm() {
    return this.fb.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      telNum: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ['', Validators.max(15)],
    });

    this.feedbackForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) {
      return;
    }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)

        this.formErrors[field as keyof formErrors] = '';
        const control = form.get(field);
        if (control?.dirty && control.invalid) {
          const messages =
            this.validationMessages[field as keyof ValidationMessages];
          for (const error in control.errors) {
            if (control.errors.hasOwnProperty(error)) {
              this.formErrors[field as keyof formErrors] +=
                messages[error as keyof BaseMessage] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telNum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: '',
    });
    // this.feedbackFormDirective.resetForm();
  }
}
