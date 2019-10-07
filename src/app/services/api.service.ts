import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import Category from 'src/app/data-types/Category';
import Item from 'src/app/data-types/Item';

@Injectable({
  providedIn: 'root'
})
export class ApiService
{
	static categories = [
		new Category( 1, 'Sweatshits' ),
		new Category( 2, 'Shirts' ),
		new Category( 3, 'Jeans' ),
		new Category( 4, 'Jackets' ),
		new Category( 5, 'Trousers' ),
		new Category( 6, 'Shorts' ),
		new Category( 7, 'Caps' ),
		new Category( 8, 'Socks' ),
		new Category( 9, 'Underwear' ),
	];

	static items = [
		new Item( {
			id: 1,
			name: 'Lorem ipsum',
			categoryId: 1,
			price: 9.99,
			priceCurrency: '$'
		} ),
		new Item( {
			id: 2,
			name: 'Lorem ipsum',
			categoryId: 1,
			price: 9.99,
			priceCurrency: '$'
		} ),
		new Item( {
			id: 3,
			name: 'Lorem ipsum',
			categoryId: 1,
			price: 9.99,
			priceCurrency: '$'
		} ),
		new Item( {
			id: 4,
			name: 'Lorem ipsum',
			categoryId: 1,
			price: 9.99,
			priceCurrency: '$'
		} ),
		new Item( {
			id: 5,
			name: 'Lorem ipsum',
			categoryId: 1,
			price: 9.99,
			priceCurrency: '$'
		} ),
	];

	constructor() { }


	public getCategories()
	{
		return of( ApiService.categories );
	}


	public getItems()
	{
		return of( ApiService.items );
	}

	public getItem( id: number )
	{
		return of( ApiService.items.find( ( v ) => v.id == id ) );
	}
}
