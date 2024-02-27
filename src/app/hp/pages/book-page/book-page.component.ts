import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HpService } from '../../services/hp.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit{
  public book?:Book;

  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,
    private hpService: HpService) {}
  
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => { return this.hpService.searchBookByNumber(id);})
    )
    .subscribe(book => {
      if(!book) return this.router.navigateByUrl('books');
      return this.book = book;
    })
  }

}
