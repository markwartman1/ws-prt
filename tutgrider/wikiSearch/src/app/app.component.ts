import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'wikiSearch';
  pages = [];

  constructor(
    private ws: WikipediaService
  ) {}
  

  onTerm(term: string) {
    this.ws.search(term).subscribe(data => {
      this.pages = data;
    });
    
  }
}

// https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Nelson%20Mandela&utf8=&format=json

// https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space