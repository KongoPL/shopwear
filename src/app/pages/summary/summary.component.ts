 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
	selector: 'app-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.scss']
} )
export class SummaryComponent implements OnInit
{
	public data: object = {};

	constructor(
		public router: Router
	)
	{

	}

	ngOnInit()
	{
		const state = window.history.state;

		if ( !state || !state.data )
		{
			this.router.navigateByUrl( '' );
			return;
		}

		this.data = state.data;
	}
}
