import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { StaffPageComponent } from './pages/staff-page/staff-page.component';
import { SpellsPageComponent } from './pages/spells-page/spells-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { CharacterTableComponent } from './components/character-table/character-table.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HomePageComponent,
    StudentsPageComponent,
    StaffPageComponent,
    SpellsPageComponent,
    BooksPageComponent,
    CharacterPageComponent,
    CharacterTableComponent,
    BookPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HpModule { }
