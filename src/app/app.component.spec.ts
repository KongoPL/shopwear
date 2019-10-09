import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe( 'AppComponent', () =>
{
	let fixture, app, debugElement: DebugElement;

	beforeEach( async( () =>
	{
		TestBed.configureTestingModule( {
			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent
			],
		} ).compileComponents();
	} ) );

	beforeEach( () =>
	{
		fixture = TestBed.createComponent( AppComponent );
		debugElement = fixture.debugElement;
		app = debugElement.componentInstance;
	} );

	it( 'should create the app', () => expect( app ).toBeTruthy() );
	it( `should have as title 'Shopwear'`, () => expect( app.title ).toEqual( 'Shopwear' ) );
	it( 'should have header', () => expect( debugElement.query( By.css( 'header#page' ) ).nativeElement ).toBeTruthy() );
	it( 'should have footer', () => expect( debugElement.query( By.css( 'footer#page' ) ).nativeElement ).toBeTruthy() );
	it( 'should have router outlet', () => expect( debugElement.query( By.css( 'router-outlet' ) ).nativeElement ).toBeTruthy() );
} );
