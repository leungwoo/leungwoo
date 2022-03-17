export interface ValidationMessages {
  firstname: FirstName;
  lastname: LastName;
  telnum: TelNum;
  email: Email;
}

export interface FirstName  extends BaseMessage {
  minlength: string;
  maxlength: string;
}
export interface LastName  extends BaseMessage {
  minlength: string;
  maxlength: string;
}
export interface TelNum extends BaseMessage  {
  pattern: string;
}
export interface Email extends BaseMessage {

}

export interface BaseMessage {
  required: string;
}
