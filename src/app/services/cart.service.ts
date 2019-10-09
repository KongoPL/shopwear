import { Injectable, EventEmitter } from '@angular/core';
import Item from 'src/app/data-types/Item';
import { ApiService } from 'src/app/services/api.service';

@Injectable( {
	providedIn: 'root'
} )
export class CartService
{
	public cartItems: CartItem[];
	public onCartUpdate = new EventEmitter<void>();

	constructor(
		public api: ApiService
	)
	{
		this.cartItems = [];

		this.onCartUpdate.subscribe( () => this.saveCart() );
		this.loadCart();
	}


	addItem( item: Item, amount: number = 1 )
	 {
		const cartItem = this.cartItems.find( ( v ) => v.item.id == item.id );

		if ( cartItem )
			cartItem.amount += amount;
		else
			this.cartItems.push( { item, amount } );

		this.onCartUpdate.emit();
	}


	clearCart()
	{
		this.cartItems = [];
		this.onCartUpdate.emit();
	}


	protected saveCart()
	{
		window.localStorage.setItem( 'cart', JSON.stringify( this.cartItems ) );
	}


	protected loadCart()
	{
		const cartItems: CartItem[] = JSON.parse( window.localStorage.getItem( 'cart' ) );
		
		if ( !cartItems )
			return;

		for ( let cartItem of cartItems )
			this.api.getItem( cartItem.item.id ).subscribe( ( item ) => this.cartItems.push( { item, amount: cartItem.amount } ) );
	}
}

export interface CartItem
{
	item: Item,
	amount: number
}
