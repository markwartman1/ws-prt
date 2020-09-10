import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wikiSearch';

  onTerm(term: string) {
    console.log("in app: " + term);
    
  }
}
