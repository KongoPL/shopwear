import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterMock, ActivatedRouteMock } from 'src/test-utils';

describe( 'ItemComponent', () =>
{
	let component: ItemComponent;
	let fixture: ComponentFixture<ItemComponent>;

	beforeEach( async( () =>
	{
		TestBed.configureTestingModule( {
			imports: [ReactiveFormsModule],
			declarations: [ItemComponent],
			providers: [{
				provide: Router,
				useClass: RouterMock
			}, {
				provide: ActivatedRoute,
				useClass: ActivatedRouteMock
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
