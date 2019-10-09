import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import Item from 'src/app/data-types/Item';

describe( 'CartService', () =>
{
	let service: CartService,
		itemA = new Item( {
			id: 1,
			name: 'Test',
			categoryId: 1
		} );

	beforeEach( () =>
	{
		TestBed.configureTestingModule( {} );

		service = TestBed.get( CartService );
		service.clearCart();
	} );

	afterEach( () =>
	{
		service.clearCart();
	} );

	it( 'should be created', () => expect( service ).toBeTruthy() );

	it( 'should add item', () =>
	{
		service.addItem( itemA, 1 );

		expect( service.cartItems.length ).toEqual( 1 );
		expect( service.cartItems[0].item ).toEqual( itemA );
		expect( service.cartItems[0].amount ).toEqual( 1 );
	} );

	it( 'should emit event when item added', () =>
	{
		let emitted = false;

		service.onCartUpdate.subscribe( () => { emitted = true; expect( true ).toBeTruthy() } );
		service.addItem( itemA, 1 );

		setTimeout( () => { if ( !emitted ) fail( 'should emit event when item added' ) }, 25 );
	} );

	it( 'should clear cart', () =>
	{
		service.addItem( itemA, 1 );

		expect( service.cartItems.length ).toEqual( 1 );

		service.clearCart();

		expect( service.cartItems.length ).toEqual( 0 );
	} );

	it( 'should update item amount', () =>
	{
		service.addItem( itemA, 1 );

		expect( service.cartItems.length ).toEqual( 1 );
		expect( service.cartItems[0].item ).toEqual( itemA );
		expect( service.cartItems[0].amount ).toEqual( 1 );

		service.addItem( itemA, 2 );

		expect( service.cartItems[0].amount ).toEqual( 3 );
	} );
} );
