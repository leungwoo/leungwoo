import { Comment } from './comment';

export class Dish {
  public id: string;
  public name: string;
  public image: string;
  public category: string;
  public featured: boolean;
  public label: string;
  public price: string;
  public description: string;
  public comments: Comment[];

  constructor(
    _id: string,
    _name: string,
    _image: string,
    _category: string,
    _featured: boolean,
    _label: string,
    _price: string,
    _description: string,
    _comments: Comment[]
  ) {
    this.id = _id;
    this.name = _name;
    this.image = _image;
    this.category = _category;
    this.featured = _featured;
    this.label = _label;
    this.price = _price;
    this.description = _description;
    this.comments = _comments;
  }
}
