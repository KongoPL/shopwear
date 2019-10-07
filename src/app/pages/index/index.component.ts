import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import Category from 'src/app/data-types/Category';
import Item from 'src/app/data-types/Item';

@Component( {
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
} )
export class IndexComponent implements OnInit
{
	public categories: Category[];
	public items: Item[];

	constructor( public api: ApiService ) { }

	ngOnInit()
	{
		this.api.getCategories().subscribe( ( v ) => this.categories = v );
		this.api.getItems().subscribe( ( v ) => this.items = v );
	}

}
