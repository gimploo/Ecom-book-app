import { Component, OnInit } from '@angular/core';
import { BookData } from '../shared/models/BookData';
import {dummyData} from '../../assets/data/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})

export class BooksComponent implements OnInit{

  public listOfBooks: Array<BookData> = []; 

  public ngOnInit(): void {

    dummyData.forEach((book) => {
      this.listOfBooks.push( 
        new BookData(
          book.title, 
          book.price, 
          book.description, 
          book.img)
      )
    })

  }

}
