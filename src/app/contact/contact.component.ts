import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

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

  constructor(private fb: FormBuilder) {
    this.feedback = new Feedback('', '', 0, '', false, '', '');
    this.feedbackForm = this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    return this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      telNum: [0, Validators.required],
      email: ['', Validators.required],
      agree: false,
      contacttype: 'None',
      message: ['', Validators.max(15)],
    });
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
