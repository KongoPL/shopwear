import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ItemComponent } from './pages/item/item.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailsFormComponent } from './pages/cart/details-form.component';

@NgModule( {
	declarations: [
		AppComponent,
		IndexComponent,
		ItemComponent,
		CartComponent,
		DetailsFormComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
} )
export class AppModule { }
