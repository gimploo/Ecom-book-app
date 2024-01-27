export class BookData {

    public img: string;
    public title: string;
    public price: number;
    public description: string;

    constructor(
        title: string, 
        price: number,
        description: string,
        img: string)
    {
        this.img = img;
        this.title = title;
        this.price = price;
        this.description = description;
    }
}