import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from 'src/app/pages/index/index.component';
import { ItemComponent } from 'src/app/pages/item/item.component';
import { CartComponent } from 'src/app/pages/cart/cart.component';


const routes: Routes = [
	{ path: '', component: IndexComponent, pathMatch: 'full' },
	{ path: 'item/:id', component: ItemComponent, pathMatch: 'full' },
	{ path: 'cart', component: CartComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
