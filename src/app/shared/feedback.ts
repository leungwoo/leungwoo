export class Feedback {
  firstName: string;
  lastName: string;
  telNum: number;
  email: string;
  agree: boolean;
  contacttype: string;
  message: string;

  constructor(
    _firstName: string,
    _lastName: string,
    _telNum: number,
    _email: string,
    _agree: boolean,
    _contacttype: string,
    _message: string
  ) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.telNum = _telNum;
    this.email = _email;
    this.agree = _agree;
    this.contacttype = _contacttype;
    this.message = _message;
  }
}

export const ContactType = ['None', 'Tel', 'Email'];
