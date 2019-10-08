import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IndexComponent } from './index.component';
import { RouterLinkDirectiveMock } from 'src/test-utils';




describe( 'IndexComponent', () =>
{
	let component: IndexComponent;
	let fixture: ComponentFixture<IndexComponent>;

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
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should create', () =>
	{
		expect( component ).toBeTruthy();
	} );
} );
