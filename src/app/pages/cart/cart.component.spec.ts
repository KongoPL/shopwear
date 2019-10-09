import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { RouterMock } from 'src/test-utils';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import Item from 'src/app/data-types/Item';


@Component( { selector: 'app-details-form', template: '' } )
class DetailsFormComponent { }

describe( 'CartComponent', () =>
{
	let component: CartComponent,
		cartService: CartService;
	let fixture: ComponentFixture<CartComponent>,
		debugElement: DebugElement,
		fakeItem = new Item( {
			id: 1,
			name: 'test',
			categoryId: 1
		} );

	beforeEach( async( () =>
	{
		TestBed.configureTestingModule( {
			declarations: [
				CartComponent,
				DetailsFormComponent
			],
			providers: [CartService, {
				provide: Router,
				useClass: RouterMock
			}]
		} )
			.compileComponents();
	} ) );

	beforeEach( () =>
	{
		fixture = TestBed.createComponent( CartComponent );
		cartService = TestBed.get( CartService );
		debugElement = fixture.debugElement;
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should create', () => expect( component ).toBeTruthy() );

	it( 'should contain details form', () => expect( debugElement.query( By.css( 'app-details-form' ) ) ).toBeTruthy() );
	it( 'should contain cart item', () =>
	{
		cartService.clearCart();
		fixture.detectChanges();
		expect( debugElement.queryAll( By.css( '#cart .item' ) ).length ).toBe( 0 );

		cartService.addItem( fakeItem );
		fixture.detectChanges();

		expect( debugElement.queryAll( By.css( '#cart .item' ) ).length ).toBe( 1 );
	} );
} );
