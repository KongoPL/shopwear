import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from 'src/app/cart.service';

@Component( {
	selector: 'app-cart',
	templateUrl: './cart.component.html',
} )
export class CartComponent implements OnInit
{
	public cartItems: CartItem[];

	constructor(
		public cart: CartService
	) { }

	ngOnInit()
	{
		this.cart.onCartUpdate.subscribe( () => this.updateCart() );

		this.updateCart();
	}


	updateCart()
	{
		this.cartItems = this.cart.cartItems;
	}
}
