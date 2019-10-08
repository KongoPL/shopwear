import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/cart.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';

describe( 'ItemComponent', () =>
{
	let component: ItemComponent,
		router = new RouterTestingModule(),
		formBuilder = new FormBuilder(),
		api = new ApiService(),
		cart = new CartService( api );
	let fixture: ComponentFixture<ItemComponent>;

	beforeEach( async( () =>
	{
		TestBed.configureTestingModule( {
			imports: [ReactiveFormsModule],
			declarations: [ItemComponent],
			providers: [{
				provide: Router,
				useClass: class
				{
					navigate = jasmine.createSpy( "navigate" ); navigateByUrl() { } }
			}, {
					provide: ActivatedRoute,
					useClass: class
					{
						snapshot = {
							paramMap: { get: () => 0 }
						}
					}
				}, FormBuilder, ApiService, CartService]
		} )
			.compileComponents();
	} ) );

	beforeEach( () =>
	{
		fixture = TestBed.createComponent( ItemComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should create', () =>
	{
		expect( component ).toBeTruthy();
	} );
} );
