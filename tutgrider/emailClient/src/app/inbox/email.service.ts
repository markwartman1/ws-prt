import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface EmailSummary {
  id: string,
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  url = 'https://api.angular-email.com/emails';

  constructor(
    private http: HttpClient
  ) { }

  getEmails() {
    return this.http.get<EmailSummary[]>(this.url);
  }
}
