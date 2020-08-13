import { Product } from './product';

export class CartItem {

    id: string;
    name: string;
    imageUrL: string;
    unitPrice: number;

    quantity: number;

    constructor(product: Product) {
        this.id = product.id;
        this.name = product.name;
        this.imageUrL = product.imageUrl;
        this.unitPrice = product.unitPrice;

        this.quantity = 1;
    }

    // constructor(
    //     id: string,
    //     name: string,
    //     imageUrL: string,
    //     unitPrice: number,
    //     quantity: number
    // ){}
}