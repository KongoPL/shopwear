import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartService } from 'src/app/cart.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@Component( { selector: 'app-details-form', template: '' } )
class DetailsFormComponent { }

describe( 'CartComponent', () =>
{
	let component: CartComponent,
		router: RouterTestingModule = new RouterTestingModule(),
		apiService: ApiService = new ApiService(),
		cartService: CartService = new CartService( apiService );
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
				useClass: class { navigate = jasmine.createSpy( "navigate" ); }
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
