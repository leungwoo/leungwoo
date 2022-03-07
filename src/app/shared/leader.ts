export class Leader {
  public id: string;
  public name: string;
  public image: string;
  public designation: string;
  public abbr: string;
  public featured: boolean;
  public description: string;

  constructor(
    _id: string,
    _name: string,
    _image: string,
    _designation: string,
    _abbr: string,
    _featured: boolean,
    _description: string
  ) {
    this.id = _id;
    this.name = _name;
    this.image = _image;
    this.designation = _designation;
    this.abbr = _abbr;
    this.featured = _featured;
    this.description = _description;
  }
}
