import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Example function to fetch rewards (replace with your real API)
  getRewards(): Observable<any> {
    return this.http.get('https://api.example.com/rewards');
  }
}
