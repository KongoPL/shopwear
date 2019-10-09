import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IndexComponent } from './index.component';
import { RouterLinkDirectiveMock } from 'src/test-utils';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe( 'IndexComponent', () =>
{
	let component: IndexComponent;
	let fixture: ComponentFixture<IndexComponent>,
		debugElement: DebugElement;

	beforeEach( async( () =>
	{
		TestBed.configureTestingModule( {
			declarations: [IndexComponent, RouterLinkDirectiveMock],
			imports: [RouterTestingModule]
		} )
			.compileComponents();
	} ) );

	beforeEach( () =>
	{
		fixture = TestBed.createComponent( IndexComponent );
		debugElement = fixture.debugElement;
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should create', () => expect( component ).toBeTruthy() );

	it( 'should have categories', () => expect( debugElement.query( By.css( '.categories' ) ).nativeElement ).toBeTruthy() );
	it( 'should have items', () => expect( debugElement.query( By.css( '.items' ) ).nativeElement ).toBeTruthy() );
} );
