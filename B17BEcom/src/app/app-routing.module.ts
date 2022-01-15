import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartlistComponent } from './components/cartlist/cartlist.component';
import { DummyLoginComponent } from './components/dummy-login/dummy-login.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MyordersComponent } from './components/myorders/myorders.component';

const routes: Routes = [
  { path: 'shopping_cart', component: CartlistComponent },
  { path: 'wish_list', component: WishlistComponent },
  { path: 'login', component: DummyLoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'myorders', component: MyordersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
