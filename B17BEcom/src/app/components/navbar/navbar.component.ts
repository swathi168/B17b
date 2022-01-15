import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  wishlist_count = 0;
  cart_count = 0;
  login:boolean=false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWishListCount();
    this.getCartCount();
  }

  getWishListCount() {
    this.http.get("https://bookcart.azurewebsites.net/api/Wishlist/11").subscribe((data: any) => {
        data = [
      {
    "bookId": 1,
    "title": "string",
    "author": "string",
    "category": "string",
    "price": 0,
    "coverFileName": "string"
    },
     ];
      console.log("Wishlist Response from API Call: ", data);
      this.wishlist_count = data.length;
    });
  }
  getCartCount() {
    this.http.get("https://bookcart.azurewebsites.net/api/ShoppingCart/99").subscribe((data: any) => {
      this.cart_count = data.length;
      console.log("Cart Response from api Call: ", data);

    });
  }
  logout(){
    this.login=true;
  }
  login1(){
    this.login=false;
  }
  

}
