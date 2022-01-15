import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, shareReplay } from 'rxjs';
import { Book } from '../components/searchbox/searchbox.component';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = "https://bookcart.azurewebsites.net/api/Book";
  books$ = this.loadAllBooks().pipe(shareReplay(1));
  constructor(private http: HttpClient) { }

  loadAllBooks() {
    return this.http.get<Book[]>(this.url);
  }
  
  searchItemValue$ = new BehaviorSubject<string>('');


}
