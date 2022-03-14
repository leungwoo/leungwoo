import { Interface } from 'readline';

export interface ValidationMessages {
  firstname: FirstName;
  lastname: LastName;
  telnum: TelNum;
  email: Email;
}
export interface FirstName {
  required: string;
  minlength: string;
  maxlength: string;
}
export interface LastName {
  required: string;
  minlength: string;
  maxlength: string;
}
export interface TelNum {
  required: string;
  pattern: string;
}
export interface Email {
  required: string;
  email: string;
}
