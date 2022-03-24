export interface ValidationComments {
  author: Author;
  comment: Commenting;
}
export interface Commenting extends Base {}
export interface Author extends Base {}
export interface Base {
  required: string;
  minlength: string;
}
