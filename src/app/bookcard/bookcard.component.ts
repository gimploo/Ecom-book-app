import { Input, Component, OnInit } from '@angular/core';
import { BookData } from '../shared/models/BookData';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrl: './bookcard.component.scss'
})
export class BookcardComponent {

  @Input() data!: BookData;
  public isDescriptionVisible: boolean = false;

  showDescription() {
    this.isDescriptionVisible = true;
  }

  hideDescription() {
    this.isDescriptionVisible = false;
  }

}
