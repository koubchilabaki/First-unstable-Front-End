import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Qualificatif} from './Qualificatif';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QualificatifService {
  private baseURL = 'http://localhost:8080/qualificatifs';

  constructor(private http: HttpClient) { }

  getQualificatif(id: number): Observable<any> {
    console.log('getQaualificatifById URL:' + `${this.baseURL}/${id}`);
    return this.http.get(`${this.baseURL}/${id}`);
  }
  getQualificatifsList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }
  deleteQualificatif(qualificatif: Qualificatif) {
    return this.http.post(`${this.baseURL}/deleteQual`, qualificatif);
  }
  updateQualificatif(qualificatif: Qualificatif): Observable<object> {
    return this.http.put(`${this.baseURL}/updateQual`, qualificatif);
  }
  createQualificatif(qualificatif: Qualificatif): Observable<object> {
    return this.http.post(`${this.baseURL}/createQual`, qualificatif);
  }
}
