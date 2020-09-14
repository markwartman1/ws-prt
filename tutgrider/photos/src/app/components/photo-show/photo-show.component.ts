import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  url: string = '';

  constructor(
    private ps: PhotoService
  ) { 
    this.getPhoto();
  }

  ngOnInit(): void {
  }

  getPhoto() {
    this.ps.getPhoto().subscribe(data => this.url = data); // .urls.small
  }

}
