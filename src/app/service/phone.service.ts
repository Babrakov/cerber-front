import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Phone } from '../model/phone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private phonesUrl: string;

  constructor(private http: HttpClient) {
    this.phonesUrl = 'http://localhost:8080/api/test/phones';
  }

  public findAll(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.phonesUrl);
  }

  public save(phone: Phone) {
    return this.http.post<Phone>(this.phonesUrl, phone);
  }
}
