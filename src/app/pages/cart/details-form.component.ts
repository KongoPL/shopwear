import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
				<input id="first_name" type="text" formControlName="name">
				<label for="first_name">First name</label>
			</div>
			<div class="input-field col s6">
				<input id="last_name" type="text" formControlName="surname">
				<label for="last_name">Last name</label>
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
				<input id="email" type="text" formControlName="email">
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

	@Output() public onFormSubmit = new EventEmitter<object>();

	constructor(
		private formBuilder: FormBuilder
	)
	{
		this.form = this.formBuilder.group( {
			name: new FormControl( 'John', [
				Validators.required,
				Validators.pattern( /^\w+$/ )
			] ),
			surname: new FormControl( 'Doe', [
				Validators.required,
				Validators.pattern( /^\w+$/ )
			] ),
			street: new FormControl( 'Angular Street 14/45', Validators.required ),
			postalCode: new FormControl( '12-345', [
				Validators.required,
				Validators.pattern( /^[0-9]{2}-[0-9]{3}$/ )
			] ),
			city: new FormControl( 'New York', Validators.required ),
			phoneNumber: new FormControl( '123456789', Validators.pattern( /^([0-9]{3}.+[0-9]{3}.+[0-9]{3}|[0-9]{9}|)$/ ) ),
			email: new FormControl( 'why-it-is@required.com', [Validators.required, Validators.email] ),
			invoiceOnEmail: true,
			newsletter: true
		} );
	}

	ngOnInit()
	{
		
	}


	onSubmit( data: any )
	{
		this.errors = [];

		const fields = {
			name: 'First name',
			surname: 'Last name',
			street: 'Street',
			postalCode: 'Postal code',
			city: 'City',
			phoneNumber: 'Phone number',
			email: 'Email address',
		}

		for ( let field in fields )
		{
			const fieldName = fields[field],
				errors = this.form.get( field ).errors;

			if ( !errors )
				continue;

			if ( errors.required )
				this.errors.push( 'Please fill "' + fieldName + '" field' );
			else if ( errors.pattern )
				this.errors.push( 'Please insert correct ' + fieldName.toLowerCase() + '!' );
			else if ( errors.email )
				this.errors.push( 'Insert valid email address!' ); 
		}

		if ( this.errors.length == 0 )
			this.onFormSubmit.emit( this.form.value );
	}
}
