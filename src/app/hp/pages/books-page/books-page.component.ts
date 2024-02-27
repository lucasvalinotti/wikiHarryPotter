import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { HpService } from '../../services/hp.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit{
  public books: Book[] = [];

  constructor(private hpService:HpService){}

  ngOnInit(): void {
    this.hpService.searchBooks()
    .subscribe(books => {
      this.books = books;
    })
  }
}
