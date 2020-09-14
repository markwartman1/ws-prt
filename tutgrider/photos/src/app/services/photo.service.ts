import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

interface PhotoData {
  urls : {
    small: string;
  };
} 

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private http: HttpClient
  ) { }

  getPhoto() {
    return this.http.get<PhotoData>("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: 'Client-ID A2YXPlVu1CSXt8UeS0lJ3c-4vtSUK-VyPNbVovRuF-w'
      }
    }).pipe(pluck('urls', 'small'));
    // While pluck is not necessary if it was not used ...
    // .urls.small would be needed in the Component
  }
}
