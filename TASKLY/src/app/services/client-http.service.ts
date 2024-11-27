import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientHttpService {
  private readonly baseUrl = '/profiles'; 

  constructor(private httpClient: HttpClient) {}

  getProfiles(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getProfileById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';

    
    if (typeof ErrorEvent !== 'undefined' && error.error instanceof ErrorEvent) {
      
      errorMessage = `Error del cliente: ${error.error.message}`;
    } else {
      
      errorMessage = `Error del servidor - Código: ${error.status}\nMensaje: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
