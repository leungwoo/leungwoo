export class Comment {
  public rating: number;
  public comment: string;
  public author: string;
  public date: string;

  constructor(
    _rating: number,
    _comment: string,
    _author: string,
    _date: string
  ) {
    this.rating = _rating;
    this.comment = _comment;
    this.author = _author;
    this.date = _date;
  }
}
