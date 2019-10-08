import { Directive } from '@angular/core';


export class RouterMock
{
	navigate = jasmine.createSpy( "navigate" );

	navigateByUrl()
	{
	}
}


export class ActivatedRouteMock
{
	public snapshot = {
		paramMap: {
			get: () => { }
		}
	}
}


@Directive( {
	selector: '[routerLink]'
} )
export class RouterLinkDirectiveMock
{ }
