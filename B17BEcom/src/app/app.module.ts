import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DummyLoginComponent } from './components/dummy-login/dummy-login.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { CartlistComponent } from './components/cartlist/cartlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule,} from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MyordersComponent } from './components/myorders/myorders.component';

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    NavbarComponent,
    DummyLoginComponent,
    SearchboxComponent,
    CartlistComponent,
    HomepageComponent,
    MyordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatAutocompleteModule,
    MatBadgeModule,
    BsDropdownModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
