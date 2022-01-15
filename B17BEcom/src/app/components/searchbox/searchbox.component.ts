import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchService } from 'src/app/service/search.service';


export interface Book {
  bookId: number;
  title: string;
  author: string;
  category: string;
  price: number;
  coverFileName: string;
}

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {

  allBooks: Book[] = [];
  searchedResults !: Observable<Book[]>;
  searchBox = new FormControl();
  searchControl = new FormControl();

  constructor(private router: Router, private search: SearchService) { }

  ngOnInit(): void {
    this.loadAllBooks();
    this.setSearchControlValue();
    this.searchedResults = this.searchControl.valueChanges
      .pipe(map(value => value.length >= 1 ? this._filter(value) : [])
      );
  }

  searchStore(event: any) {
    const searchItem = this.searchControl.value;
    if (searchItem !== '') {
      this.router.navigate(['/'], {
      });
    }
  }
  cancelSearch() {
    this.router.navigate(['/']);
  }

  loadAllBooks() {
    this.search.books$.subscribe(
      (data: Book[]) => {
        this.allBooks = data;
      }
    );
  }



  private setSearchControlValue() {
    this.search.searchItemValue$.subscribe(
      (data) => {
        if (data) {
          this.searchControl.setValue(data);
        } else {
          this.searchControl.setValue('');
        }
      }
    );
  }

  private _filter(title: string): Book[] {
    const searchQuery = title.toLowerCase();

    return this.allBooks?.filter(option => option.title.toLowerCase().includes(searchQuery)
      || option.author.toLowerCase().includes(searchQuery));
  }

}