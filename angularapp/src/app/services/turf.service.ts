import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turf } from '../models/turf.model';

@Injectable({
  providedIn: 'root'
})
export class TurfService {
  public apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
  }

  addTurf(formData: FormData): Observable<Turf> {
    return this.http.post<Turf>(`${this.apiUrl}/api/turf`, formData, { headers: this.getAuthHeaders() });
  }

  getAllTurfs(): Observable<Turf[]> {
    return this.http.get<Turf[]>(`${this.apiUrl}/api/turf`, { headers: this.getAuthHeaders() });
  }

  getTurfById(turfId: number): Observable<Turf> {
    return this.http.get<Turf>(`${this.apiUrl}/api/turf/${turfId}`, { headers: this.getAuthHeaders() });
  }

  updateTurf(turfId: number, turf: Turf): Observable<Turf> {
    return this.http.put<Turf>(`${this.apiUrl}/api/turf/${turfId}`, turf, { headers: this.getAuthHeaders() });
  }

  deleteTurf(turfId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/turf/${turfId}`, { headers: this.getAuthHeaders() });
  }
}
