import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { BookcardComponent } from './bookcard/bookcard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    BookcardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
