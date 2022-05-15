import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentMarkService {
  SERVER_URL: string = 'http://localhost:8080/api';
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getStudentData() {
    return this.httpClient.get(`${this.SERVER_URL}/studentData`);
  }
}
