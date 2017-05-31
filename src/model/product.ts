export class Product {
  public title: string;
  public price: number;
  public cat: string;
  public state: string;
  public adr: string;
  public desc : string;
  public images: string[] = [];
  constructor() {
    this.images.push("assets/images/discover-img.jpg")
    this.images.push("assets/images/discover-img2.jpg")
    this.images.push("assets/images/discover-img3.jpg")
  }
}
