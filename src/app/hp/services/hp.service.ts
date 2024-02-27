import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/character.interface';
import { Observable, catchError, map, of } from 'rxjs';
import { Spell } from '../interfaces/spell.interface';
import { Book } from '../interfaces/book.interface';

@Injectable({providedIn: 'root'})
export class HpService {
  private apiUrl:string = 'https://hp-api.onrender.com/api';
  private booksApiUrl: string = 'https://potterapi-fedeperin.vercel.app';

  constructor(private http: HttpClient) { }
  
  public searchCharacters(term:string): Observable<Character[]>{
    return this.http.get<Character[]>(`${this.apiUrl}/characters/${term}`)
    .pipe( 
      catchError(() => of([]))
    );
  }

  public searchSpells(): Observable<Spell[]>{
    return this.http.get<Spell[]>(`${this.booksApiUrl}/es/spells`)
    .pipe( 
      catchError(() => of([]))
    );
  }

  public searchBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.booksApiUrl}/es/books`)
    .pipe( 
      catchError(() => of([]))
    );
  }

  public searchBookByNumber(n: number): Observable<Book | null> {
    const url = `${this.booksApiUrl}/es/books?index=${n}`;
    return this.http.get<Book>(url)
      .pipe( 
        map(book =>  book ? book : null),
        catchError(() => of(null))
      );
  }

  public searchCharacterById(id: string): Observable<Character | null> {
    return this.http.get<Character[]>(`${this.apiUrl}/character/${id}`)
    .pipe( 
      map(characters => characters.length > 0 ? characters[0] : null),
      catchError(() => of(null))
    );
  }

}