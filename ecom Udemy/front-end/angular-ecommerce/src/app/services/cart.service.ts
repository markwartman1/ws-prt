import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem) {

    // check if we already have the item in out cart
    let alreadyExistingInCart : boolean = false;
    let existingCartItem: CartItem = undefined;

    if (this.cartItems.length) {
      
      // find the itme in the cart based on item id
      // for(let c of this.cartItems) {
      //   if (c.id === theCartItem.id) {
      //     existingCartItem = c;
      //     break;
      //   }
      // }
      existingCartItem = this.cartItems.find(ci => ci.id === theCartItem.id);

      // check if we found it
      alreadyExistingInCart = (existingCartItem != undefined);
    }

    if (alreadyExistingInCart) {
      existingCartItem.quantity++;
    }
    else {
      this.cartItems.push(theCartItem);
    }

    // comput price & quantity
    this.computeCartTotals();

  }

  computeCartTotals() {
    
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let c of this.cartItems) {
      totalPriceValue += c.quantity * c.unitPrice;
      totalQuantityValue += c.quantity;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.logCartData(totalPriceValue, totalQuantityValue);
  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    
    console.log("contents of cart");
    for (const c of this.cartItems) {
      const subTotalPrice = c.quantity * c.unitPrice;
      console.log(`name: ${c.name}`);
      console.log(`unitPrice: ${c.unitPrice}`);
      console.log(`quantity: ${c.quantity}`);
      console.log(`subTotalPrice: ${subTotalPrice}`);
    }

    console.log("totalPrice: " + totalPriceValue.toFixed(2));
    console.log("quantity: " + totalQuantityValue);
    
  }

  decrementQty(item: CartItem) {
    
    item.quantity--;

    if (item.quantity === 0) {
      this.remove(item);
    } else {
      this.computeCartTotals();
    }
  }

  remove(item: CartItem) {
    
    const itemIndex = this.cartItems.findIndex(tci => item.id === tci.id);
    console.log(itemIndex);

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
  }
}
