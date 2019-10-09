import { TestBed, async } from '@angular/core/testing';

import { ApiService } from './api.service';

describe( 'ApiService', () =>
{
	let service: ApiService; 

	beforeEach( () =>
	{
		TestBed.configureTestingModule( {} );

		service = TestBed.get( ApiService );
	} );

	it( 'should be created', () => expect( service ).toBeTruthy() );

	it( 'should return categories', async( () =>
	{
		service.getCategories().subscribe( ( v ) =>
		{
			expect( Array.isArray( v ) ).toBeTruthy();
			expect( v.length ).toBeGreaterThan( 0 );
		} );
	} ) );

	it( 'should return items', async( () =>
	{
		service.getItems().subscribe( ( v ) =>
		{
			expect( Array.isArray( v ) ).toBeTruthy();
			expect( v.length ).toBeGreaterThan( 0 );
		} );
	} ) );

	it( 'should return instance of item', async( () =>
	{
		const itemId = 1;

		service.getItem( itemId ).subscribe( ( v ) =>
		{
			expect( v ).toBeTruthy();
			expect( v.constructor.name ).toEqual( 'Item' );
		} );
	} ) );

	it( 'should NOT return item', async( () =>
	{
		service.getItem( -1 ).subscribe(
			() => fail( 'Should not return item' ),
			() => expect( true ).toBeTruthy()
		);
	} ) );
} );
