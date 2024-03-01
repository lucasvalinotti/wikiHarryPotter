import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './hp/pages/home-page/home-page.component';
import { StudentsPageComponent } from './hp/pages/students-page/students-page.component';
import { StaffPageComponent } from './hp/pages/staff-page/staff-page.component';
import { SpellsPageComponent } from './hp/pages/spells-page/spells-page.component';
import { BooksPageComponent } from './hp/pages/books-page/books-page.component';
import { CharacterPageComponent } from './hp/pages/character-page/character-page.component';
import { BookPageComponent } from './hp/pages/book-page/book-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'students', component: StudentsPageComponent},
  {path: 'staff', component: StaffPageComponent},
  {path: 'spells', component: SpellsPageComponent},
  {path: 'books', component: BooksPageComponent},
  {path: 'characters/:id', component: CharacterPageComponent},
  {path: 'books/:id', component: BookPageComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
