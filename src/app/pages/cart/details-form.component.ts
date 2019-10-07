import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component( {
	selector: 'app-details-form',
	template: `
	<div *ngIf="this.errors.length > 0">
		<p>
			During validation, those errors occured:
		</p>
		<ul class="browser-default">
			<li *ngFor="let error of this.errors">{{error}}</li>
		</ul>
	</div>
	<form [formGroup]="form" (ngSubmit)="onSubmit(form.value)">
		<div class="row">
			<div class="input-field col s6">
				<input id="first_name" type="text" formControlName="name" class="validate">
				<label for="first_name">First Name</label>
			</div>
			<div class="input-field col s6">
				<input id="last_name" type="text" formControlName="surname">
				<label for="last_name">Last Name</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s12">
				<input id="street" type="text" formControlName="street">
				<label for="street">Street</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s6">
				<input id="postal" type="text" formControlName="postalCode">
				<label for="postal">Postal code</label>
			</div>
			<div class="input-field col s6">
				<input id="city" type="text" formControlName="city">
				<label for="city">City</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s12">
				<input id="email" type="text" formControlName="email" class="validate">
				<label for="email">Email address</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s12">
				<input id="phoneNumber" type="text" formControlName="phoneNumber">
				<label for="phoneNumber">Phone number</label>
			</div>
		</div>
		<div class="row">
			<p>
				<label>
					<input type="checkbox" formControlName="invoiceOnEmail" />
					<span>I want to receive invoice on email</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" formControlName="newsletter" />
					<span>I want to sign up for newsletter</span>
				</label>
			</p>
		</div>
		<div class="row">
			<button type="submit" class="btn">Submit</button>
		</div>
	</form>
  `,
	styles: []
} )
export class DetailsFormComponent implements OnInit
{
	public form: FormGroup;
	public errors: string[] = [];

	constructor(
		private formBuilder: FormBuilder
	)
	{
		this.form = this.formBuilder.group( {
			name: '',
			surname: '',
			street: '',
			postalCode: '',
			city: '',
			phoneNumber: '',
			email: '',
			invoiceOnEmail: true,
			newsletter: false
		} );
	}

	ngOnInit()
	{
		
	}


	onSubmit( data: any )
	{
		this.errors = [];

		if ( data.name == '' )
			this.errors.push( 'Please fill "First name" field' );
		else if ( data.name.length < 4 )
			this.errors.push( 'Name should be at least 4 letters long' );

	}
}
