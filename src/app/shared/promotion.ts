export class Promotion {
  public id: string;
  public name: string;
  public image: string;
  public label: string;
  public price: string;
  public featured: boolean;
  public description: string;

  constructor(
    _id: string,
    _name: string,
    _image: string,
    _label: string,
    _price: string,
    _featured: boolean,
    _description: string
  ) {
    this.id = _id;
    this.name = _name;
    this.image = _image;
    this.label = _label;
    this.price = _price;
    this.featured = _featured;
    this.description = _description;
  }
}
