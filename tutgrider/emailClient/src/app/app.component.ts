import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'emailClient';
  signedin$: BehaviorSubject<boolean>;

  constructor(
    private authService: AuthService
  ) { 
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit() { 

    //this.authService.signedin$.subscribe( data => this.signedin = data);

    this.authService.checkAuth().subscribe(() => {});
    
  }
}
