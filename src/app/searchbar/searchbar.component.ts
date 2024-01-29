import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {

  public searchIndex : number = 0;


  onInputChange(): void {
    console.log('Input value:', this.searchIndex);
  }
}
