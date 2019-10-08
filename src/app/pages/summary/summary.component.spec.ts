import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { RouterMock } from 'src/test-utils';

describe( 'SummaryComponent', () =>
{
	let component: SummaryComponent;
	let fixture: ComponentFixture<SummaryComponent>;

	beforeEach( async( () =>
	{
		TestBed.configureTestingModule( {
			declarations: [SummaryComponent],
			providers: [{
				provide: Router,
				useClass: RouterMock
			}]
		} )
			.compileComponents();
	} ) );

	beforeEach( () =>
	{
		fixture = TestBed.createComponent( SummaryComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should create', () =>
	{
		expect( component ).toBeTruthy();
	} );
} );
