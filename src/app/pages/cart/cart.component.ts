import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from 'src/app/cart.service';
import { Router } from '@angular/router';

@Component( {
	selector: 'app-cart',
	templateUrl: './cart.component.html',
} )
export class CartComponent implements OnInit
{
	public cartItems: CartItem[];

	constructor(
		public cart: CartService,
		public router: Router
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


	onDetailsGiven( details: object )
	{
		this.router.navigateByUrl( 'summary', { state: { data: details } } );
	}
}
