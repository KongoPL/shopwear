import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Directive } from '@angular/core';

import { DetailsFormComponent } from './details-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe( 'DetailsFormComponent', () =>
{
	let component: DetailsFormComponent,
		formBuilder = new FormBuilder();
	let fixture: ComponentFixture<DetailsFormComponent>;

	beforeEach( async( () =>
	{
		TestBed.configureTestingModule( {
			imports: [ReactiveFormsModule ],
			declarations: [DetailsFormComponent],
			providers: [FormBuilder]
		} )
			.compileComponents();
	} ) );

	beforeEach( () =>
	{
		fixture = TestBed.createComponent( DetailsFormComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should create', () =>
	{
		expect( component ).toBeTruthy();
	} );
} );
