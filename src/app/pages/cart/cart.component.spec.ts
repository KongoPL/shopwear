import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { RouterMock } from 'src/test-utils';

@Component( { selector: 'app-details-form', template: '' } )
class DetailsFormComponent { }

describe( 'CartComponent', () =>
{
	let component: CartComponent;
	let fixture: ComponentFixture<CartComponent>;

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
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should create', () =>
	{
		expect( component ).toBeTruthy();
	} );
} );
