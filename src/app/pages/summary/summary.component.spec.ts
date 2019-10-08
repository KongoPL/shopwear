import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe( 'SummaryComponent', () =>
{
	let component: SummaryComponent,
		router = new RouterTestingModule();
	let fixture: ComponentFixture<SummaryComponent>;

	beforeEach( async( () =>
	{
		TestBed.configureTestingModule( {
			declarations: [SummaryComponent],
			providers: [{
				provide: Router,
				useClass: class
				{
					navigate = jasmine.createSpy( "navigate" );
					navigateByUrl() { }
				}
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
