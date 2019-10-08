import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Directive } from '@angular/core';

import { IndexComponent } from './index.component';

@Directive( {
	selector: '[routerLink]'
} )
export class RouterLinkDirectiveStub
{ }


describe( 'IndexComponent', () =>
{
	let component: IndexComponent;
	let fixture: ComponentFixture<IndexComponent>;

	beforeEach( async( () =>
	{
		TestBed.configureTestingModule( {
			declarations: [IndexComponent, RouterLinkDirectiveStub],
			imports: [RouterTestingModule ]
		} )
			.compileComponents();
	} ) );

	beforeEach( () =>
	{
		fixture = TestBed.createComponent( IndexComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should create', () =>
	{
		expect( component ).toBeTruthy();
	} );
} );
