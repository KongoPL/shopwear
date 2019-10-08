import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import Item from 'src/app/data-types/Item';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component( {
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
} )
export class ItemComponent implements OnInit
{
	public item: Item;
	public addToCartForm: FormGroup;
	
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private api: ApiService,
		private cart: CartService
	)
	{
		this.addToCartForm = this.formBuilder.group( {
			amount: 1
		} );
	}

	ngOnInit()
	{
		const itemId = +this.route.snapshot.paramMap.get( 'id' );

		this.api.getItem( itemId ).subscribe(
			( v ) => this.item = v,
			() => this.router.navigateByUrl( '' )
		);
	}


	onAddToCartFormSubmit( formData: { amount: any } )
	{
		formData.amount = +formData.amount;

		if ( formData.amount > 0 )
			this.cart.addItem( this.item, formData.amount );
	}
}
