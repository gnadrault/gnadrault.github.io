import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailRequest } from '../models/email-request.model';
import { Observable, catchError } from 'rxjs';
import { EmailResponse } from '../models/email-response.interface';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  readonly apiUrl: string = 'http://localhost:3000/sendmail';

  constructor(private httpClient: HttpClient) {}

  sendEmail(email: EmailRequest): Observable<EmailResponse> {
    return this.httpClient.post<EmailResponse>(this.apiUrl, email).pipe(
      catchError((error: any) => {
        console.error('An error occurred:', error);
        throw error;
      })
    );
  }
}
